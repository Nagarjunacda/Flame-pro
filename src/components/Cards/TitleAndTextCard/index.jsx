import Card from 'react-bootstrap/Card';
import { renderHTML } from '@/utils/htmlString';
import { formatDate } from '@/utils/formatDate';
import styles from './TitleAndTextCard.module.css'

function TitleAndTextCard({ data }) {
    const { post_title, post_content, post_date } = data
    const cardImage = '/Images/blogImg.svg'
    const formattedDate = formatDate(post_date)

    return (
        <Card className={styles.cardCont}>
            <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
            <Card.Body className={styles.body}>
                <Card.Title className={styles.date}>{formattedDate}</Card.Title>
                <Card.Title className={styles.title}>{post_title}</Card.Title>
                <Card.Text className={styles.text}>
                    {renderHTML(post_content)}
                </Card.Text>
                <section className={styles.colorBar}></section>
            </Card.Body>
        </Card>
    );
}
export default TitleAndTextCard;