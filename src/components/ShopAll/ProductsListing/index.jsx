import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { productsUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData';
import ProductCard from '@/components/Cards/ProductCard'
import FlameImage from '@/reusbleComponents/FlameImage'
import styles from '../shopAll.module.css'

function ProductsListing({ productsData }) {
    const [showDropdown, setShowDropdown] = useState(false)
    const [itemsNumber, setItemsNumbers] = useState(10)
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [selectedPageNum, setSelectedPageNum] = useState(1)
    const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
    const arrowSrc = '/Images/bottomGreyArrow.svg'
    const leftArrowSrc = '/Images/leftGreyArrow.svg'
    const rightArrowSrc = '/Images/rightGreyArrow.svg'
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
    const numberArr = [10, 20, 30, 40, 50]

    useEffect(() => {
        setProducts(productsData)
    }, [productsData])

    useEffect(() => {
        const getProductData = async () => {
            const url = `${productsUrl}?per_page=${itemsNumber}&page=${selectedPageNum}`
            const { data, error, headers } = await handleServerSideProps(url);
            const totalNoOfPages = headers['x-wp-totalpages']
            setProducts(data)
            setTotalPages(totalNoOfPages)
        }
        getProductData()
    }, [itemsNumber, selectedPageNum])

    const handleBottomBtn = () => {
        setShowDropdown(!showDropdown)
    }

    const handleNoOfProducts = (number) => {
        setItemsNumbers(number)
        setSelectedPageNum(1)
        setShowDropdown(false)
    }

    const handlePageSelection = (number) => {
        if (number === 'left') {
            if (selectedPageNum === 1) {
                return
            }
            setSelectedPageNum(selectedPageNum - 1)
            return
        }
        if (number === 'right') {
            if (selectedPageNum == totalPages) {
                return
            }
            setSelectedPageNum(selectedPageNum + 1)
            return
        }
        setSelectedPageNum(number)
    }

    return <section className={styles.listingPage}>
        {isDesktop && <section className={styles.filtersCont}></section>}
        <section className={styles.productsCont}>
            <section className={styles.pagesCont}>
                <section className={styles.showBlock}>
                    <section className={styles.showText}>
                        <p className={styles.show}>Show:</p>
                        <p className={styles.itemNum}>{itemsNumber}</p>
                    </section>
                    <section onClick={handleBottomBtn} className={styles.downArrow}>
                        <FlameImage src={arrowSrc} alt='icon' />
                    </section>
                    {showDropdown && <section className={styles.dropDown}>{numberArr.map((e, index) => {
                        return <section key={index} className={styles.showItems} onClick={() => { handleNoOfProducts(e) }}>{e} items</section>
                    })}</section>}
                </section>
                <section className={styles.pageNumCont}>
                    <section className={styles.arrows} onClick={() => { handlePageSelection('left') }}>
                        <FlameImage src={leftArrowSrc} alt='icon' />
                    </section>
                    {pageNumbers?.map((num, index) => {
                        return <section onClick={() => { handlePageSelection(num) }} className={selectedPageNum === index + 1 ? styles.pageNumHighlighted : styles.pageNum}>{num}</section>
                    })}
                    <section className={styles.arrows} onClick={() => { handlePageSelection('right') }}>
                        <FlameImage src={rightArrowSrc} alt='icon' />
                    </section>
                </section>
            </section>
            <section className={styles.products}>
                {products?.map((product) => {
                    return <ProductCard product={product} />
                })}
            </section>
        </section>
    </section>
}
export default ProductsListing