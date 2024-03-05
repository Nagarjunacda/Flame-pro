import FlameImage from "@/reusbleComponents/FlameImage";
import styles from "./uspblock.module.css";
const UspBlock = (props) => {
  const {
    firtImage,
    firstText,
    secondImage,
    secondText,
    thirdText,
    thirdImage,
  } = props;
  return (
    <section className={styles.usbpblockMain}>
      <div className={styles.uspblock}>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <FlameImage src={firtImage} alt={"icon1"} />
          </div>
          <p>{firstText}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <FlameImage src={secondImage} alt={"icon1"} />
          </div>
          <p>{secondText}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <FlameImage src={thirdImage} alt={"icon1"} />
          </div>
          <p>{thirdText}</p>
        </div>
      </div>
    </section>
  );
};

export default UspBlock;
