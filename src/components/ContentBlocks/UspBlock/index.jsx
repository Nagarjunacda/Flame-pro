import FlameImage from "@/reusbleComponents/FlameImage";
import SliderComp from "@/reusbleComponents/SliderComp";
import { useMediaQuery } from "react-responsive";
import styles from "./uspblock.module.css";

const UspBlock = ({ trayData }) => {
  const uspItems = trayData.usp_block_repeater;
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });

  return (
    <>
      {isDesktop ? <section className={styles.usbpblockMain}>
        <div className={styles.uspblock}>
          {uspItems?.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <FlameImage src={item?.icon_x3} alt={`Icon ${index + 1}`} />
              </div>
              <p>
                <span className={styles.boldText}>{item?.title_bold}</span>{" "}
                {item?.usp_title_x3}
              </p>
            </div>
          ))}
        </div>
      </section> :
        <SliderComp data={uspItems} title={'Usp Block'} slidesToShow={1} />}
    </>
  );
};

export default UspBlock;
