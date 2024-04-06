import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import styles from './productCard.module.css'

function ProductCard({ product }) {
    const cardImage = product?.images?.length ? product?.images[0]?.src : product?.image
    const cardTitle = product?.name
    const slug = product?.slug
    const productId = product?.id
    const isOnSale = product?.on_sale
    const productUrl = `/shop-all/${slug}/${productId}`

    const handleCardClick = () => {
        if (!localStorage.getItem('recentlyViewed')) {
            localStorage.setItem('recentlyViewed', JSON.stringify([]));
        }
        const recentProducts = JSON.parse(localStorage.getItem('recentlyViewed'));
        const isduplicateProduct = recentProducts.some(e => e?.id === product?.id);
        if (isduplicateProduct) {
            return
        }
        recentProducts.unshift(product)
        const slicedArray = recentProducts.slice(0, 4);
        localStorage.setItem('recentlyViewed', JSON.stringify(slicedArray));
    }

    return <Link href={productUrl}><Card className={styles?.cardCont} onClick={handleCardClick}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        {isOnSale && <section className={styles.saleLabel}>Sale</section>}
        <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
        </Card.Body>
    </Card>
    </Link>
}
export default ProductCard