import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./blogCard.module.css";
import { formatDate } from "@/utils/formatDate";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function BlogCard({ category = '', data }) {
  console.log(data, '!! data')
  const blogImage = data?.featured_image_url || "/Images/blogImg.svg";
  const text = "View All Blocks";
  const isFireFighting = data?.post_type_cat?.length && data?.post_type_cat[0]?.name === 'Fire'
  const date = data?.date;
  const title = data?.title?.rendered
  return (
    <Card className={styles.cardCont}>
      <Card.Img variant="top" src={blogImage} className={styles.cardImg} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>
          <p>{formatDate(date)}</p>
        </Card.Title>
        <Card.Text className={styles.text}>
          <h5>
            {title}
          </h5>
        </Card.Text>
        <section className={isFireFighting ? styles.colorBarFire : styles.colorBarDefence}></section>
      </Card.Body>
    </Card>
  );
}
export default BlogCard;
