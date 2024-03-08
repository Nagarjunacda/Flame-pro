import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlameImage from "@/reusbleComponents/FlameImage";
import Style from "@/components/ContentBlocks/TwoAdBlocks/twoblock.module.css";

function TwoAdBlocks() {
  return (
    <section className={Style.twoblockMain}>
      <div className={Style.mainContainer}>
        <div className={Style.blockOne}>
          <figure className={Style.figOne}>
            <FlameImage src={"/images/pexels-anna-shvets-5965111.jpg"} />
          </figure>
          <div className={Style.overlay}></div>
          <div className={Style.twoBlockData}>
            <div className={Style.logoHolder}>
              <figure className={Style.logosImg}>
                <FlameImage src={"/images/fireLogo.svg"} alt={"fireLogo"} />
              </figure>
            </div>
          </div>
        </div>
        <div className={Style.blockTwo}>
          <figure>
            <FlameImage src={"/images/pexels-somchai-kongkamsri-104764.jpg"} />
          </figure>
          <div className={Style.overlay}></div>
        </div>
      </div>
    </section>
  );
}

export default TwoAdBlocks;
