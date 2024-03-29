import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import { renderHTML } from "@/utils/htmlString";
import styles from "./fullWidthAdBlock.module.css";

function FullWidthAdBlock({ trayData }) {
  const imgSrc = trayData?.image;
  const text = trayData?.text;
  const buttonTitle = trayData?.button_title;
  const title = trayData?.title;
  const buttonColor = "var(--color-secondary)";
  const btnTextColor = "var(--color-primary)";
  const buttonText = trayData?.button_title;

  const btnClick = () => {};

  return (
    <section className={styles.mainCont}>
      <section className={styles.imageStyles}>
        <FlameImage src={imgSrc} alt="image" />
      </section>
      <section className={styles.overlay}></section>
      <section className={styles.form}>
        <section className={styles.innerSec}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.desc}>{renderHTML(text)}</p>
        </section>
        <section className={styles.btnSection}>
          <FlameBtn
            color={buttonColor}
            text={buttonText}
            textColor={btnTextColor}
            isLoadState={false}
            btnFunction={btnClick}
          />
        </section>
      </section>
    </section>
  );
}
export default FullWidthAdBlock;
