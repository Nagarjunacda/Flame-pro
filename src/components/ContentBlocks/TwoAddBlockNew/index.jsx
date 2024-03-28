import FlameImage from "@/reusbleComponents/FlameImage";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import style from "./twoAddBlock.module.css";

const TwoAddBlockNew = () => {
  function btnFunction() { }
  const blockOneStyle = {
    background: "url(./images/pexels-anna-shvets-5965111.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const blockTwoStyle = {
    background: "url(./images/pexels-anna-shvets-5965111.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Change the opacity value as needed
    zIndex: 1,
  };
  return (
    <section className={style.mainTwoBlock}>
      <div className={style.mainDiv}>
        <div className={style.blockOne} style={blockOneStyle}>
          <div style={overlayStyle}></div>
          <div className={style.blockContent}>
            <figure className={style.fireLogo}>
              <FlameImage src={"./Images/fireLogo.svg"} alt={"flamepro"} />
            </figure>
            <ButtonStyleTwo
              text={"Discover Firefighting PPE"}
              textColor="var( --color-secondary)"
              btnFunction={btnFunction}
            />
          </div>
        </div>
        <div className={style.blockTwo} style={blockTwoStyle}>
          <div style={overlayStyle}></div>
          <div className={style.blockContent}>
            <figure className={style.fireLogo}>
              <FlameImage src={"./Images/fireLogo.svg"} alt={"flamepro"} />
            </figure>
            <ButtonStyleTwo
              text={"Discover Defence Procurement"}
              textColor="var( --color-secondary)"
              btnFunction={btnFunction}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoAddBlockNew;
