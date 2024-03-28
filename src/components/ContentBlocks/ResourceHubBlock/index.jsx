import SliderComp from "@/reusbleComponents/SliderComp";
import styles from "./resourceHubBlock.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function ResourceHubBlock({ trayData }) {
  const { title, button_title } = trayData;
  const resourceData = trayData?.blog_select;

  return (
    <section className={styles.mainCont}>
      <section className={styles.heading}>
        <h5 className={styles.title}>{title}</h5>
        <ButtonStyleTwo
          text={"Remove Product"}
          textColor="var( --color-primary)"
        />
      </section>
      <section className={styles.slider}>
        <SliderComp data={resourceData} title={title} slidesToShow={3} />
      </section>
    </section>
  );
}
export default ResourceHubBlock;
