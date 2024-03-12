import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import Style from "@/components/ContentBlocks/TwoAdBlocks/twoblock.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function TwoAdBlocks({ trayData }) {
  function btnFunction() {}
  return (
    <section className={Style.twoblockMain}>
      <div className={Style.mainContainer}>
        <div className={Style.blockOne}>
          <figure className={Style.figOne}>
            <FlameImage src={"/images/block1.jpg"} />
          </figure>
          <div className={Style.overlay}></div>
          <div className={Style.twoBlockData}>
            <div className={Style.logoHolder}>
              <figure className={Style.logosImg}>
                <FlameImage src={"/images/fireLogo.svg"} alt={"fireLogo"} />
              </figure>
              <ButtonStyleTwo
                text={"Discover Firefighting PPE"}
                textColor="var( --color-secondary)"
                btnFunction={btnFunction}
              />
            </div>
          </div>
        </div>
        <div className={Style.blockTwo}>
          <figure className={Style.figTwo}>
            <FlameImage src={"/images/block2.jpg"} />
          </figure>
          <div className={Style.overlay}></div>
          <div className={Style.twoBlockData}>
            <div className={Style.logoHolder}>
              <figure className={Style.logosImg}>
                <FlameImage src={"/images/fireLogo.svg"} alt={"fireLogo"} />
              </figure>
              <ButtonStyleTwo
                text={"Discover Firefighting PPE"}
                textColor="var( --color-secondary)"
                btnFunction={btnFunction}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoAdBlocks;
