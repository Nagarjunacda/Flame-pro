import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import RecentlyViewedBlock from "../ContentBlocks/RecentlyViewedBlock";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import Link from "next/link";

function AddedBasketItem(productData) {
  const handleBtnclick = () => { };
  const popupImage = productData?.productData?.images[0]?.src;
  const popupProductTitle = productData?.productData.name;

  return (
    <>
      <Row>
        <Col>
          <figure>
            <FlameImage src={popupImage} alt={"product image"} />
          </figure>
        </Col>
        <Col xs={6}>
          <h2>{popupProductTitle}</h2>
        </Col>
        <Col>
          <Link href={"/basket"}>
            <FlameBtn
              text={"View Your Quote Basket"}
              textColor={"var(--color-secondary)"}
              color={"var(--color-primary)"}
              btnFunction={handleBtnclick}
            />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <RecentlyViewedBlock />
        </Col>
      </Row>
    </>
  );
}
export default AddedBasketItem;
