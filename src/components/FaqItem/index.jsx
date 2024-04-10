import Accordion from "react-bootstrap/Accordion";
import styles from "./faqitem.module.css";
function FaqItem({ trayData }) {
  console.log(trayData, "traytray");
  return (
    <section className={styles.faqContentBlock}>
      <Accordion defaultActiveKey="0" flush>
        {trayData?.faq_select?.map((fqsItems, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                <h3>{fqsItems.post_title}</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>{fqsItems.post_content}</p>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </section>
  );
}
export default FaqItem;
