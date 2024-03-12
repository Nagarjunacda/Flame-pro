import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import Style from "./twoblock.module.css";

function TwoAdBlocks({ trayData }) {
  function btnFunction() { }
  return (
    <section className={Style.twoblockMain}>
      <section className={Style.mainContainer}>
        <section className={Style.blockOne}>
          <figure className={Style.figOne}>
            <FlameImage src={"/images/block1.jpg"} />
          </figure>
          <section className={Style.overlay}></section>
          <section className={Style.twoBlockData}>
            <section className={Style.logoHolder}>
              <figure className={Style.logosImg}>
                <FlameImage src={"/images/fireLogo.svg"} alt={"fireLogo"} />
              </figure>
              <ButtonStyleTwo
                text={"Discover Firefighting PPE"}
                textColor="var( --color-secondary)"
                btnFunction={btnFunction}
              />
            </section>
          </section>
        </section>
        <section className={Style.blockTwo}>
          <figure className={Style.figTwo}>
            <FlameImage src={"/images/block2.jpg"} />
          </figure>
          <section className={Style.overlay}></section>
          <section className={Style.twoBlockData}>
            <section className={Style.logoHolder}>
              <figure className={Style.logosImg}>
                <FlameImage src={"/images/fireLogo.svg"} alt={"fireLogo"} />
              </figure>
              <ButtonStyleTwo
                text={"Discover Firefighting PPE"}
                textColor="var( --color-secondary)"
                btnFunction={btnFunction}
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default TwoAdBlocks;
