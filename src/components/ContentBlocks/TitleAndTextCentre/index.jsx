import FlameBtn from "@/reusbleComponents/FlameBtn";
import styles from "./title-text-center.module.css";
import { renderHTML } from "@/utils/htmlString";

const TitleAndTextCentre = ({ trayData }) => {
  function btnFunction() {}

  return (
    <section className={styles.titletextcentre}>
      <div>
        <h2>{trayData?.title}</h2>
        <p>{renderHTML(trayData?.text)}</p>
        <FlameBtn
          text={trayData?.button_title}
          textColor="var( --color-secondary)"
          color="var( --color-primary)"
          btnFunction={btnFunction}
        />
      </div>
    </section>
  );
};
export default TitleAndTextCentre;
