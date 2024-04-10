import Card from "react-bootstrap/Card";
import { renderHTML } from "@/utils/htmlString";
import { useMediaQuery } from "react-responsive";
import styles from "./caseStudyCard.module.css";

function CaseStudyCard({ data }) {
  const { title, content, name } = data;
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const postContent = content?.rendered;
  const postTitle = title?.rendered;
  // const cardImage = isDesktop
  //   ? "/Images/caseStudyImage.svg"
  //   : "/Images/blogImg.svg";
  const cardImage = data?.featured_image_url;

  return (
    <Card className={styles.cardCont}>
      {!isDesktop && (
        <Card.Title className={styles.mainHeading}>{name}</Card.Title>
      )}
      <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>
          <h5>{postTitle}</h5>
        </Card.Title>
        <Card.Text className={styles.text}>
          {renderHTML(postContent)}
        </Card.Text>
        <section className={styles.colorBar}></section>
      </Card.Body>
    </Card>
  );
}
export default CaseStudyCard;
