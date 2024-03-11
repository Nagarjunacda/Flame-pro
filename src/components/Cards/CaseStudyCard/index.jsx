import Card from 'react-bootstrap/Card';
import { renderHTML } from '@/utils/htmlString';
import styles from './caseStudyCard.module.css'

function CaseStudyCard({ data }) {
    const { post_title, post_content, name } = data
    const cardImage = '/Images/blogImg.svg'

    return (
        <Card className={styles.cardCont}>
            <Card.Title className={styles.mainHeading}>{name}</Card.Title>
            <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
            <Card.Body className={styles.body}>
                <Card.Title className={styles.title}>{post_title}</Card.Title>
                <Card.Text className={styles.text}>
                    {renderHTML(post_content)}
                </Card.Text>
                <section className={styles.colorBar}></section>
            </Card.Body>
        </Card>
    );
}
export default CaseStudyCard;