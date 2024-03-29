import Link from "next/link";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import { renderHTML } from "@/utils/htmlString";
import styles from "./title-text-center.module.css";

const TitleAndTextCentre = ({ trayData }) => {
  const buttonTwoTitle = trayData?.button2_title
  const buttonTwoColor = "var( --color-primary)"
  const route = trayData?.button_title === 'Shop All' ? '/shop-all' : trayData?.button_title === 'About FlamePro' ? '/aboutUs' : null

  function btnFunction() { }

  function btnTwoFunction() { }

  return (
    <section className={styles.titletextcentre}>
      <div>
        <h2>{trayData?.title}</h2>
        <p>{renderHTML(trayData?.text)}</p>
        {trayData?.button_title && <section className={styles.btnSection}>
          <Link href={route}>
            <FlameBtn
              text={trayData?.button_title}
              textColor="var( --color-secondary)"
              color="var( --color-primary)"
              btnFunction={btnFunction}
            />
          </Link>
          {buttonTwoTitle && <ButtonStyleTwo text={buttonTwoTitle} textColor={buttonTwoColor} isLoadState={false} btnFunction={btnTwoFunction} />}
        </section>}
      </div>
    </section>
  );
};
export default TitleAndTextCentre;
