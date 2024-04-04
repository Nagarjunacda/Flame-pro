import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";

function AddedBasketItem() {
  return (
    <>
      <Row>
        <Col>
          <figure>
            <FlameImage src={"/Images/FlameCartImagePlaceholder.svg"} />
          </figure>
        </Col>
        <Col xs={6}>
          <h2>
            770/775 Valiant Fire-Fighters Suit Lorem Ipsum Dolor Sit Amet,{" "}
          </h2>
        </Col>
        <Col>
          <FlameBtn
            text={"View Your Quote Basket"}
            textColor={"var(--color-secondary)"}
            color={"var(--color-primary)"}
          />
        </Col>
      </Row>
    </>
  );
}
export default AddedBasketItem;
