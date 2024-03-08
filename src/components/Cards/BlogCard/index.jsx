import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './blogCard.module.css'

function BlogCard() {
    const blogImage = '/Images/blogImg.svg'
    return (
        <Card className={styles.cardCont}>
            <Card.Img variant="top" src={blogImage} className={styles.cardImg} />
            <Card.Body className={styles.body}>
                <Card.Title className={styles.title}>20 October 2023</Card.Title>
                <Card.Text className={styles.text}>
                    Protecting Firefighters From Cancer: The Most Advanced Particulate Hoods …
                </Card.Text>
                <section className={styles.colorBar}></section>
                <section className={styles.blog}>
                    <Card.Link href="#" className={styles.linkText}>View All Blogs</Card.Link>
                </section>
            </Card.Body>
        </Card>
    );
}
export default BlogCard;