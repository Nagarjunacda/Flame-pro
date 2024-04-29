import Link from "next/link";
import Card from "react-bootstrap/Card";
import styles from "./recentlyViewedCard.module.css";

function RecentlyViewedCard({ data }) {
    const cardImage = data && data?.images?.length ? data?.images[0]?.src : data?.featured_image_url;
    console.log(data, '!! card')
    const cardTitle = data?.title?.rendered || data?.name;
    const slug = data?.slug;

    return (
        <Card className={styles.cardCont}>
            <Link href={`/shop/${slug}`}>
                <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
            </Link>
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
