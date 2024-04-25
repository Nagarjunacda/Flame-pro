import { renderHTML } from "@/utils/htmlString";
import FlameImage from "@/reusbleComponents/FlameImage";
import styles from "./wearFitGuideBlock.module.css";

function WearFitGuideBlock({ productInfo }) {
  const data = productInfo?.filter((e) => e?.title === "Wear Fit Guide");
  const info = data?.length && data.length > 0 ? data[0] : {};
  const downloadIconSrc = "/Images/downloadIcon.svg";
  const downloads = info?.download_wearfit_button;
  const desc = info?.description;

  return (
    <section className={styles.mainCont}>
      <section className={styles.tableBlock}>{renderHTML(desc)}</section>
      <section className={styles.downloadsBlock}>
        <h3 className={styles.donwloadHead}>Downloads</h3>
        <section className={styles.brochure}>
          {downloads &&
            downloads.map((e, index) => {
              return (
                <section key={index} className={styles.brochureItem}>
                  <a
                    href={e?.wearfit_file?.link}
                    download={e?.wearfit_file?.filename}
                    target="blank"
                  >
                    <FlameImage src={downloadIconSrc} alt={"downloadIcon"} />
                  </a>
                  <a
                    href={e?.wearfit_file?.link}
                    download={e?.wearfit_file?.filename}
                    target="blank"
                  >
                    <h5 className={styles.brochureText}>
                      {e?.wearfit_button_title}
                    </h5>
                  </a>
                </section>
              );
            })}
        </section>
      </section>
    </section>
  );
}
export default WearFitGuideBlock;
