import Style from "./testimonialCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import { renderHTML } from "@/utils/htmlString";
const TestimonialCard = ({ data }) => {
  return (
    <section>
      <Container>
        <Row className={Style.testimonalRow}>
          <Col xs={12} lg={10}>
            <div className={Style.testimonalData}>
              <h2 className={Style.testimonialTitle}>
                {data?.title?.rendered}
              </h2>
              <p className={Style.testimonialDesc}>
                {renderHTML(data?.content?.rendered)}
              </p>
              <h4 className={Style.testimonialAuthor}>
                - {data?.name_and_company_title}
              </h4>
            </div>
          </Col>
          <Col
            xs={12}
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <figure className={Style.testimonalImage}>
              <FlameImage
                src={data?.featured_image_url}
                alt={"Testimonal Image"}
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialCard;
