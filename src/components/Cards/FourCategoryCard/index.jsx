import Card from "react-bootstrap/Card";
import styles from "./fourCategoryCard.module.css";

function FourCategoryCard({ data, blockTitle }) {
  const cardImage = data.featured_image_url ? data.featured_image_url : data?.src;
  const cardTitle = data?.name;
  return (
    <Card className={styles.cardCont}>
      <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
      {cardTitle && !blockTitle && (
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>
            <h5>{cardTitle}</h5>
          </Card.Title>
        </Card.Body>
      )}
    </Card>
  );
}
export default FourCategoryCard;
