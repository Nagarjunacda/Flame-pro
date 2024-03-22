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
    const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
    const arrowSrc = '/Images/bottomGreyArrow.svg'
    const leftArrowSrc = '/Images/leftGreyArrow.svg'
    const rightArrowSrc = '/Images/rightGreyArrow.svg'
    const numberArr = [10, 20, 30, 40, 50]

    useEffect(() => {
        setProducts(productsData)
    }, [productsData])

    useEffect(() => {
        const getProductData = async () => {
            const url = `${productsUrl}?per_page=${itemsNumber}&page=1`
            const { data, error, headers } = await handleServerSideProps(url);
            setProducts(data)
            console.log(data, headers, '!! dat')
        }
        getProductData()
    }, [itemsNumber])

    const handleBottomBtn = () => {
        setShowDropdown(true)
    }

    const handleNoOfProducts = (number) => {
        setItemsNumbers(number)
        setShowDropdown(false)
    }

    return <section className={styles.listingPage}>
        {isDesktop && <section className={styles.filtersCont}></section>}
        <section className={styles.productsCont}>
            <section className={styles.pagesCont}>
                <section className={styles.showBlock}>
                    <section className={styles.showText}>
                        <p className={styles.show}>Show:</p>
                        <p className={styles.itemNum}>{itemsNumber}</p>
                        {showDropdown && <section className={styles.dropDown}>{numberArr.map((e, index) => {
                            return <section key={index} className={styles.showItems} onClick={() => { handleNoOfProducts(e) }}>{e}</section>
                        })}</section>}
                    </section>
                    <section onClick={handleBottomBtn} className={styles.downArrow}>
                        <FlameImage src={arrowSrc} alt='icon' />
                    </section>
                </section>
                <section className={styles.pageNumCont}>
                    <FlameImage src={leftArrowSrc} alt='icon' />
                    <FlameImage src={rightArrowSrc} alt='icon' />
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