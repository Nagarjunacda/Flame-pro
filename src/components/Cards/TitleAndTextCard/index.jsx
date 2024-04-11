import Link from "next/link";
import Card from "react-bootstrap/Card";
import { renderHTML } from "@/utils/htmlString";
import { formatDate } from "@/utils/formatDate";
import styles from "./TitleAndTextCard.module.css";

function TitleAndTextCard({ data }) {
  const { title, content, date, featured_image_url, post_type_cat } = data;
  const cardImage = featured_image_url ? featured_image_url : "/Images/blogImg.svg";
  const postTitle = title?.rendered;
  const postContent = content?.rendered;
  const postType = post_type_cat ? post_type_cat[0]?.name : 'Fire'
  const formattedDate = formatDate(date);
  const url = `resource-hub/${data?.slug}/${data?.id}`

  return (
    <Card className={styles.cardCont}>
      <Link href={url} >
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        <Card.Body className={styles.body}>
          <Card.Title className={styles.date}>
            <p>{formattedDate}</p>
          </Card.Title>
          <Card.Title className={styles.title}>
            <h5>{postTitle}</h5>
          </Card.Title>
          <Card.Text className={styles.text}>
            <p> {renderHTML(postContent)}</p>
          </Card.Text>
          <section className={postType === 'Defence' ? styles.colorBarDefence : styles.colorBarFire}></section>
        </Card.Body>
      </Link>
    </Card>

  );
}
export default TitleAndTextCard;
