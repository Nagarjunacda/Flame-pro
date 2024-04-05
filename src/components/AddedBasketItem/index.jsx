import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import Link from "next/link";

function AddedBasketItem() {
  const handleBtnclick = () => { }
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
          <Link href={'/basket'}>
            <FlameBtn
              text={"View Your Quote Basket"}
              textColor={"var(--color-secondary)"}
              color={"var(--color-primary)"}
              btnFunction={handleBtnclick}
            />
          </Link>
        </Col>
      </Row>
    </>
  );
}
export default AddedBasketItem;
