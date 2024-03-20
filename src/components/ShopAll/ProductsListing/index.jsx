import ProductCard from '@/components/Cards/ProductCard'
import styles from '../shopAll.module.css'

function ProductsListing({ productsData }) {
    return <section className={styles.listingPage}>
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