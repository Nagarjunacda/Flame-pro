import { useRouter } from "next/router";
import SliderComp from "@/reusbleComponents/SliderComp";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import styles from "./resourceHubBlock.module.css";

function ResourceHubBlock({ trayData }) {
  const router = useRouter();
  const { title, button_title } = trayData;
  const resourceData = trayData?.blog_select;

  const handleBtnClick = () => {
    router.push('/resource-hub')
  }

  return (
    <section className={styles.mainCont}>
      <section className={styles.heading}>
        <h5 className={styles.title}>{title}</h5>
        <ButtonStyleTwo text={button_title} textColor="var( --color-primary)" btnFunction={handleBtnClick} />
      </section>
      <section className={styles.slider}>
        <SliderComp data={resourceData} title={title} slidesToShow={3} />
      </section>
    </section>
  );
}
export default ResourceHubBlock;
