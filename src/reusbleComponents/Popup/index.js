import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FlameBtn from "../FlameBtn";
import ButtonStyleTwo from "../ButtonStyleTwo";
import AddedBasketItem from "@/components/AddedBasketItem";
import Link from "next/link";

function Popup({ show, setShow, productData }) {
  const handleClose = () => setShow(false);
  const popupStyleDweb = {
    padding: "50px 100px",
  };

  const handleBtnClick = () => {};

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Added To Your Quote Basket</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddedBasketItem productData={productData} />
        </Modal.Body>
        <Modal.Footer>
          <Link href={"/shop"}>
            {" "}
            <ButtonStyleTwo
              text={"Browse More Products"}
              textColor={"var(--color-primary)"}
            />
          </Link>
          <Link href={"/basket"}>
            <FlameBtn
              text={"View Your Quote Basket"}
              color={"var(--color-primary)"}
              btnFunction={handleBtnClick}
              textColor={"var(--color-secondary)"}
            />
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
