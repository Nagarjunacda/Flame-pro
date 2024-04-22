import Modal from "react-bootstrap/Modal";
import FlameImage from "../FlameImage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { renderHTML } from "@/utils/htmlString";
function AboutPopup({ show, setShow, teamInfo }) {
  const handleClose = () => setShow(false);

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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={4}>
              <figure>
                <FlameImage src={teamInfo?.featured_image_url} />
              </figure>
            </Col>
            <Col lg={6}>
              <h3>{teamInfo?.title?.rendered}</h3>
              <p>{teamInfo?.name_and_company_title}</p>
              <p>{renderHTML(teamInfo?.content?.rendered)}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutPopup;
