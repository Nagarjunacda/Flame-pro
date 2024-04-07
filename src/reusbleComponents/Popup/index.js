import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FlameBtn from "../FlameBtn";
import ButtonStyleTwo from "../ButtonStyleTwo";
import AddedBasketItem from "@/components/AddedBasketItem";
import Link from "next/link";

function Popup({ show, setShow }) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const popupStyleDweb = {
    padding: "50px 100px",
  };

  const handleBtnClick = () => { }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        //dialogClassName="modal-90w"
        // style={popupStyleDweb}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Added To Your Quote Basket</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddedBasketItem />
        </Modal.Body>
        <Modal.Footer>
          <ButtonStyleTwo
            text={"Browse More Products"}
            textColor={"var(--color-primary)"}
          />
          <Link href={'/basket'}>
            <FlameBtn
              text={"View Your Quote Basket"}
              color={"var(--color-primary)"}
              btnFunction={handleBtnClick}
            />
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
