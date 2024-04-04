import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import FlameImage from '@/reusbleComponents/FlameImage';
import styles from './productCard.module.css'

function ProductCard({ product }) {
    const cardImage = product?.images?.length ? product?.images[0]?.src : product?.image
    const cardTitle = product?.name
    const slug = product?.slug
    const productId = product?.id
    const isOnSale = product?.on_sale
    const productUrl = `/shop-all/${slug}/${productId}`

    return <Link href={productUrl}><Card className={styles?.cardCont}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        {isOnSale && <section className={styles.saleLabel}>Sale</section>}
        <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
        </Card.Body>
    </Card>
    </Link>
}
export default ProductCard