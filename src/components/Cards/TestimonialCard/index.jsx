import Style from "./testimonialCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
const TestimonialCard = ({ data }) => {
  console.log(data, "item");
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} lg={10}>
            <h2 className={Style.testimonialTitle}>{data?.post_title}</h2>
            <p className={Style.testimonialDesc}>{data?.post_content}</p>
            <h4 className={Style.testimonialAuthor}>- Name, Company Name</h4>
          </Col>
          <Col xs={12} lg={2}>
            <FlameImage src={"./images/fireLogo.svg"} alt={"testimage"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialCard;
