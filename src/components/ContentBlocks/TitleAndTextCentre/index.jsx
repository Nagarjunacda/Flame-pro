import FlameBtn from "@/reusbleComponents/FlameBtn";
import styles from "./title-text-center.module.css";

const TitleAndTextCentre = ({ title, description, btnText, btnLink }) => {

  function btnFunction() { }

  return (
    <section className={styles.titletextcentre}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <FlameBtn
          text="About FlamePro"
          textColor="#fff"
          color="#000"
          btnFunction={btnFunction}
        />
      </div>
    </section>
  );
};
export default TitleAndTextCentre;
