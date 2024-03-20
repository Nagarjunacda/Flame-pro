import ProductCard from '@/components/Cards/ProductCard'
import { useMediaQuery } from 'react-responsive'
import styles from '../shopAll.module.css'

function ProductsListing({ productsData }) {
    const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
    return <section className={styles.listingPage}>
        {isDesktop && <section className={styles.filtersCont}></section>}
        <section className={styles.productsCont}>
            <section className={styles.products}>
                {productsData.map((product) => {
                    return <ProductCard product={product} />
                })}
            </section>
        </section>
    </section>
}
export default ProductsListing