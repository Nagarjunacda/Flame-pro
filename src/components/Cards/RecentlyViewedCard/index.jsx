import Card from "react-bootstrap/Card";
import styles from "./recentlyViewedCard.module.css";

function RecentlyViewedCard({ data }) {
    const cardImage = data && data?.length ? data?.images[0]?.src : data?.featured_image_url;
    const cardTitle = data?.name;
    return (
        <Card className={styles.cardCont}>
            <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
            {cardTitle && (
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                        <h5>{cardTitle}</h5>
                    </Card.Title>
                </Card.Body>
            )}
        </Card>
    );
}
export default RecentlyViewedCard;
