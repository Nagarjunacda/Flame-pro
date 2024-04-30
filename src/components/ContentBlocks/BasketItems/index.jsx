import { useState } from "react";
import { useContext } from "react";
import Link from "next/link";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import Container from "react-bootstrap/Container";
import { priceFormatter } from "@/utils/priceFormatter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import { handlePostRequests } from "@/utils/handlePostCalls";
import Form from "react-bootstrap/Form";
import { updateCustomerUrl } from "@/utils/urls";
import { removeFromCartUrl } from "@/utils/urls";
import TitleAndTextCentre from "../TitleAndTextCentre";
import style from "./basketItems.module.css";

const BasketItems = () => {
  const nonceVal = useContext(NonceContext);
  const { cartData, setTriggerUpdate } = useCartData();
  const [showTextBox, setShowTextBox] = useState(false);
  const [quanityValue, setquanityValue] = useState('');
  const [clickedProduct, setClickedProduct] = useState({});
  const [isRemoveProduct, setIsRemoveProduct] = useState(false);
  const [showEditedQuantity, setShowEditedQuantity] = useState(false);
  const [updatingQty, setUpdatingQty] = useState(false);
  // const removeCtaText = isRemoveProduct ? 'Removing Product' : 'Remove Product';
  const emptyBasket = {
    title: "Basket Empty",
    // button_title: "Shop All",
    // button_link: '/shop'
  };
  const loadingBasket = {
    title: 'Loading Basket...',
    button_title: ''
  }
  function btnFunction() { }

  function handleEditQuote(data) {
    setClickedProduct(data);
    setShowTextBox(!showTextBox);
    if (!showTextBox) {
      setShowEditedQuantity(false)
      return
    }
  }
  function quanityInput(val) {
    setShowEditedQuantity(true)
    setquanityValue(val)
  }

  const handleRemoveFromCart = async (data) => {
    setClickedProduct(data);
    setIsRemoveProduct(true)
    const body = {
      key: data?.key
    };
    const customHeaders = { Nonce: nonceVal };
    const res = await handlePostRequests(removeFromCartUrl, body, customHeaders);
    if (res?.data) {
      setTriggerUpdate(true);
      setIsRemoveProduct(false)
    }
    if (res?.error) {
      setIsRemoveProduct(false)
    }
  };

  const handleTickMarkClick = async (data) => {
    setShowTextBox(false)
    setUpdatingQty(true)
    const body = {};
    const key = data?.key;
    const customHeaders = { Nonce: nonceVal };
    const url = `${updateCustomerUrl}?key=${key}&quantity=${quanityValue}`;
    const res = await handlePostRequests(url, body, customHeaders);
    if (res?.data) {
      setTriggerUpdate(true);
      setUpdatingQty(false);
      return
    }
    setUpdatingQty(false);
  }

  function extractLastPath(url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2]; // Get the second last part
  }

  return (
    <>
      {cartData?.items?.length ? (
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
          {cartData?.items?.map((data, index) => (
            <div key={index}>
              <Row className={style.BasketItemsRow}>
                <Col lg={2} sm={4} xs={4}>
                  <Link className={style.productImage} href={`/shop/${extractLastPath(data?.permalink)}`}>
                    <FlameImage src={data.images[0].src} alt={"Product"} />
                  </Link>
                </Col>
                <Col lg={10} sm={8} xs={8}>
                  <Row className="">
                    <Col lg={4} sm={12} xs={12} className="d-flex align-items-center pt-lg-1">
                      <Link href={`/shop/${extractLastPath(data?.permalink)}`}>
                        <h3 className="mb-xs-4 mb-sm-4 mb-4 mb-lg-0 mb-md-4">
                          {data.name}
                        </h3>
                      </Link>
                    </Col>
                    <Col
                      lg={2}
                      sm={12}
                      xs={12}
                      className="mb-xs-4 mb-sm-4 mb-4 mb-lg-0 mb-md-4 d-flex align-items-center"
                    >
                      {" "}
                      {showTextBox && clickedProduct?.name === data?.name ? (
                        <InputGroup>
                          <Form.Control
                            type="text"
                            aria-label="Quantity"
                            aria-describedby="Quantity"
                            value={showEditedQuantity ? quanityValue : data.quantity}
                            onChange={(e) => {
                              quanityInput(e.target.value);
                            }}
                          />
                          <InputGroup.Text id="btnGroupAddon" className={style.tickMark} onClick={() => { handleTickMarkClick(data) }}>
                            &#10004;
                          </InputGroup.Text>
                        </InputGroup>
                      ) : (
                        <section className={style.priceSpinner}>
                          {priceFormatter(data.quantity)}
                          {updatingQty && clickedProduct?.name === data?.name && <section className={style.qunatitySpinner}>
                            <Spinner animation="border" variant="danger" size="sm" />
                            <h5 className={style.qunatitySpinnerText}>Updating Quantity</h5>
                          </section>}
                        </section>
                      )}
                    </Col>
                    <Col
                      lg={3}
                      sm={12}
                      xs={12}
                      className="mb-xs-4 mb-sm-4 mb-4 mb-lg-0 mb-md-4 pt-lg-2 d-flex align-items-center"
                      onClick={() => { handleRemoveFromCart(data) }}
                    >
                      {isRemoveProduct && clickedProduct?.name === data?.name && <section className={style.removeSpin}><Spinner animation="border" variant="danger" size="sm" /></section>}
                      <ButtonStyleTwo
                        text={isRemoveProduct && clickedProduct?.name === data?.name ? 'Removing Product' : 'Remove Product'}
                        textColor="var( --color-primary)"
                        btnFunction={btnFunction}
                        btnIcon={isRemoveProduct && clickedProduct?.name === data?.name ? '' : "/Images/deleteIcon.svg"}
                      />
                      {/* <section>
                        <Spinner animation="border" variant="danger" size="sm" />
                        <h3>Removing Product</h3>
                      </section> */}
                    </Col>
                    <Col lg={3} sm={12} xs={12} className="pt-lg-2">
                      <ButtonStyleTwo
                        text={showTextBox && clickedProduct?.name === data?.name ? "Cancel" : "Edit Quote"}
                        textColor="var( --color-primary)"
                        btnFunction={() => { handleEditQuote(data) }}
                        btnIcon={"/Images/editIcon.svg"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr className={style.horizontalLine} />
            </div>
          ))}
          {/* items */}
        </section>
      ) : cartData?.items?.length === 0 ? (
        <TitleAndTextCentre trayData={emptyBasket} />
      ) : <TitleAndTextCentre trayData={loadingBasket} />}
    </>
  );
};

export default BasketItems;
