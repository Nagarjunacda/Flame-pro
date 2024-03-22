import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import style from "./basketItems.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
const BasketItems = () => {
  function btnFunction() {}
  return (
    <section className={style.backetProducts}>
      <div className="d-none d-sm-none d-lg-block">
        <header className={style.headerRow}>
          <Row className="d-flex justify-content-start align-items-center">
            <Col lg={2} sm={4} xs={4}>
              <h3>Product</h3>
            </Col>
            <Col lg={10} sm={8} xs={8}>
              <Row className="">
                <Col lg={4} sm={12} xs={12}></Col>
                <Col lg={2} sm={12} xs={12}>
                  <h3>Quantity</h3>
                </Col>
                <Col lg={3} sm={12} xs={12}></Col>
                <Col lg={3} sm={12} xs={12}></Col>
              </Row>
            </Col>
          </Row>
        </header>
      </div>

      {/* Header ends */}
      <div>
        <Row className="d-flex justify-content-start align-items-center">
          <Col lg={2} sm={4} xs={4}>
            <figure className={style.productImage}>
              <FlameImage
                src={"./Images/productTestImage.svg"}
                alt={"Product"}
              />
            </figure>
          </Col>
          <Col lg={10} sm={8} xs={8}>
            <Row className="">
              <Col lg={4} sm={12} xs={12}>
                <h3 className="mb-xs-4 mb-sm-4 mb-4 mb-lg-0 mb-md-4">
                  770/775 Valiant Fire-Fighters Suit Lorem Ipsum Dolor Sit Amet
                </h3>
              </Col>
              <Col
                lg={2}
                sm={12}
                xs={12}
                className="mb-xs-4 mb-sm-4 mb-4 mb-lg-0 mb-md-4"
              >
                80,000
              </Col>
              <Col
                lg={3}
                sm={12}
                xs={12}
                className="mb-xs-4 mb-sm-4 mb-4 mb-lg-0 mb-md-4"
              >
                <ButtonStyleTwo
                  text={"Remove Product"}
                  textColor="var( --color-primary)"
                  btnFunction={btnFunction}
                  btnIcon={"/Images/deleteIcon.svg"}
                />
              </Col>
              <Col lg={3} sm={12} xs={12}>
                <ButtonStyleTwo
                  text={"Edit Quote"}
                  textColor="var( --color-primary)"
                  btnFunction={btnFunction}
                  btnIcon={"/Images/editIcon.svg"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className={style.horizontalLine} />
      </div>
      {/* items */}
    </section>
  );
};

export default BasketItems;
