import Card from 'react-bootstrap/Card';
import styles from './fourCategoryCard.module.css'

function FourCategoryCard({ data }) {
    console.log(data, '!! item')
    const cardImage = data?.featured_image_url
    const cardTitle = data?.name
    return <Card className={styles.cardCont}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
        </Card.Body>
    </Card>
}
export default FourCategoryCard