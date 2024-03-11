import SliderComp from "@/reusbleComponents/SliderComp";
import styles from "./resourceHubBlock.module.css";

function ResourceHubBlock({ trayData }) {
  const { title, button_title } = trayData;
  const resourceData = trayData?.blog_select;

  return (
    <section className={styles.mainCont}>
      <section className={styles.heading}>
        <p className={styles.title}>{title}</p>
        <p className={styles.viewAll}>
          <u>{button_title}</u>
        </p>
      </section>
      <section className={styles.slider}>
        <SliderComp data={resourceData} title={title} slidesToShow={3} />
      </section>
    </section>
  );
}
export default ResourceHubBlock;
