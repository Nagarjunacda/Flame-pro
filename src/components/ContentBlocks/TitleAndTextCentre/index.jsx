import Link from "next/link";
import { useRouter } from "next/router";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import { renderHTML } from "@/utils/htmlString";
import styles from "./title-text-center.module.css";

const TitleAndTextCentre = ({ trayData }) => {
  const router = useRouter();
  const buttonTwoTitle = trayData?.button2_title;
  const buttonTwoRoute = trayData?.button2_link;
  const buttonTwoColor = "var( --color-primary)";

  function btnFunction() { }

  function btnTwoFunction() {
    if (buttonTwoTitle === "Speak To Us") {
      return
    }
    router.push(buttonTwoRoute)
  }

  return (
    <section className={styles.titletextcentre}>
      <div>
        <h2>{trayData?.title}</h2>
        <p>{renderHTML(trayData?.text)}</p>
        {trayData?.button_title && (
          <section className={styles.btnSection}>
            <Link href={trayData?.button_link}>
              <FlameBtn
                text={trayData?.button_title}
                textColor="var( --color-secondary)"
                color="var( --color-primary)"
                btnFunction={btnFunction}
              />
            </Link>

            {buttonTwoRoute &&
              <ButtonStyleTwo
                text={buttonTwoTitle}
                textColor={buttonTwoColor}
                isLoadState={false}
                btnFunction={btnTwoFunction}
              />}
          </section>
        )}
      </div>
    </section>
  );
};
export default TitleAndTextCentre;
