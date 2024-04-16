import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import { renderHTML } from "@/utils/htmlString";
import styles from "./imageRightTextLeft.module.css";
import Link from "next/link";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function ImageRightTextLeft({ trayData }) {
  const imageBanner = trayData?.image;
  const title = trayData?.title;
  const desc = trayData?.text;
  const buttonText = trayData?.button1_text;
  const buttonColor = "var(--color-primary)";
  const textColor = "var(--color-secondary)";
  const route = trayData?.button_link;

  const handleBtnClick = () => { };

  return (
    <section className={styles.mainCont}>
      <section className={styles.textBlock}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.desc}>{renderHTML(desc)}</p>
        {route && buttonText && (
          <section className={styles.btnSection}>
            <Link href={route}>
              <FlameBtn
                color={buttonColor}
                text={buttonText}
                textColor={textColor}
                isLoadState={false}
                btnFunction={handleBtnClick}
              />
            </Link>
          </section>
        )}
      </section>
      <section className={styles.imageBlock}>
        <FlameImage src={imageBanner} alt={"bannerImg"} />
        {/* </section>
        </section>
        <section className={styles.imageBlock}> */}
        {/* <FlameImage src={imageBanner} alt={"bannerImg"} /> */}
      </section>
    </section>
  );
}
export default ImageRightTextLeft;
