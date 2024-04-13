import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./blogCard.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function BlogCard({ category = '' }) {
  const blogImage = "/Images/blogImg.svg";
  const text = "View All Blocks";
  const isFireFighting = category === "Firefighting PPE";
  return (
    <Card className={styles.cardCont}>
      <Card.Img variant="top" src={blogImage} className={styles.cardImg} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>
          <p>20 October 2023</p>
        </Card.Title>
        <Card.Text className={styles.text}>
          <h5>
            {" "}
            Protecting Firefighters From Cancer: The Most Advanced Particulate
            Hoods …
          </h5>
        </Card.Text>
        <section className={isFireFighting ? styles.colorBarFire : styles.colorBarDefence}></section>
      </Card.Body>
    </Card>
  );
}
export default BlogCard;
