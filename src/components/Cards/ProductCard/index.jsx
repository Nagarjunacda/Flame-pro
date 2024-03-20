import Card from 'react-bootstrap/Card';
import FlameImage from '@/reusbleComponents/FlameImage';
import styles from './productCard.module.css'

function ProductCard({ product }) {
    const cardImage = product?.images[0]?.src
    const cardTitle = product?.name
    return <Card className={styles?.cardCont}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
        </Card.Body>
    </Card>
}
export default ProductCard