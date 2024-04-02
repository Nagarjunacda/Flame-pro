import Style from "./testimonialCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
const TestimonialCard = ({ data }) => {
  return (
    <section>
      <Container>
        <Row className={Style.testimonalRow}>
          <Col xs={12} lg={10}>
            <div className={Style.testimonalData}>
              <h2 className={Style.testimonialTitle}>{data?.post_title}</h2>
              <p className={Style.testimonialDesc}>{data?.post_content}</p>
              <h4 className={Style.testimonialAuthor}>- Name, Company Name</h4>
            </div>
          </Col>
          <Col
            xs={12}
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <figure className={Style.testimonalImage}>
              <FlameImage
                src={"/Images/testimonalImage.svg"}
                alt={"testimage"}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialCard;
