import Link from "next/link";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import { renderHTML } from "@/utils/htmlString";
import styles from "./title-text-center.module.css";

const TitleAndTextCentre = ({ trayData }) => {
  const buttonTwoTitle = trayData?.button2_title;
  const buttonTwoRoute = trayData?.button2_link;
  const buttonTwoColor = "var( --color-primary)";
  const route =
    trayData?.button_title === "Shop All"
      ? "/shop"
      : trayData?.button_title === "About FlamePro"
      ? "/about"
      : trayData?.button_title === "Why choose FlamePro? "
      ? "/about"
      : trayData?.button_title === "Why choose FlamePro?"
      ? "/about"
      : trayData?.button_title === "Speak To Us"
      ? "/contact-us"
      : "";

  function btnFunction() {}

  function btnTwoFunction() {}
  console.log(trayData, "ppe");
  return (
    <section className={styles.titletextcentre}>
      <div>
        <h2>{trayData?.title}</h2>
        <p>{renderHTML(trayData?.text)}</p>
        {trayData?.button_title && (
          <section className={styles.btnSection}>
            <Link href={route}>
              <FlameBtn
                text={trayData?.button_title}
                textColor="var( --color-secondary)"
                color="var( --color-primary)"
                btnFunction={btnFunction}
              />
            </Link>

            <Link href={buttonTwoRoute}>
              <ButtonStyleTwo
                text={buttonTwoTitle}
                textColor={buttonTwoColor}
                isLoadState={false}
                btnFunction={btnTwoFunction}
              />
            </Link>
          </section>
        )}
      </div>
    </section>
  );
};
export default TitleAndTextCentre;
