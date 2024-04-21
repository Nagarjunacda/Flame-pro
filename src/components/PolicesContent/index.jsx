import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import { renderHTML } from "@/utils/htmlString";
import styles from "./Polices.module.css";
import Link from "next/link";

function PolicesContent({ trayData }) {
  const backArrowSrc = "/Images/leftGreyArrow.svg";
  const pageContent =
    trayData && trayData.length && trayData[0]?.content?.rendered;
  const btnFunction = () => { };
  return (
    <section className={styles.mainCont}>
      <section className={styles.btnShareSec}>
        <Link href={"/policies"}>
          <ButtonStyleTwo
            text={"Back To Policies"}
            textColor="var( --color-primary)"
            btnFunction={btnFunction}
            btnIcon={backArrowSrc}
          />
        </Link>
      </section>
      <section className={styles.contentSection}>
        <p>{renderHTML(pageContent)}</p>
      </section>
    </section>
  );
}
export default PolicesContent;
