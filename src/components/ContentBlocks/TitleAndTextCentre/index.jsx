import Link from "next/link";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import { renderHTML } from "@/utils/htmlString";
import styles from "./title-text-center.module.css";

const TitleAndTextCentre = ({ trayData }) => {
  const buttonTwoTitle = trayData?.button2_title
  const buttonTwoColor = "var( --color-primary)"

  function btnFunction() { }

  function btnTwoFunction() { }

  return (
    <section className={styles.titletextcentre}>
      <div>
        <h2>{trayData?.title}</h2>
        <p>{renderHTML(trayData?.text)}</p>
        <section className={styles.btnSection}>
          <Link href={'/shop-all'}>
            <FlameBtn
              text={trayData?.button_title}
              textColor="var( --color-secondary)"
              color="var( --color-primary)"
              btnFunction={btnFunction}
            />
          </Link>
          {buttonTwoTitle && <ButtonStyleTwo text={buttonTwoTitle} textColor={buttonTwoColor} isLoadState={false} btnFunction={btnTwoFunction} />}
        </section>
      </div>
    </section>
  );
};
export default TitleAndTextCentre;
