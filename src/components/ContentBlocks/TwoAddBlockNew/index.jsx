import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import style from "./twoAddBlock.module.css";

const TwoAddBlockNew = ({ trayData }) => {
  const img1 = trayData?.image
  const img2 = trayData?.image_2
  const logo1 = trayData?.logo
  const logo2 = trayData?.logo_2
  const buttonTitle1 = trayData?.button_title
  const buttonTitle2 = trayData?.button_title_2


  function btnFunction() { }

  const blockOneStyle = {
    background: `url(${img1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const blockTwoStyle = {
    background: `url(${img2})`,
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
          <Link className={style.blockContent} href={'/firefighting-ppe'}>
            <div style={overlayStyle}></div>
            <div className={style.blockContent}>
              <figure className={style.fireLogo}>
                <FlameImage src={logo1} alt={"flamepro"} />
              </figure>
              <ButtonStyleTwo
                text={buttonTitle1}
                textColor="var( --color-secondary)"
                btnFunction={btnFunction}
              />
            </div>
          </Link>
        </div>
        <div className={style.blockTwo} style={blockTwoStyle}>
          <Link className={style.blockContent} href={'/defence-procurement'}>
            <div style={overlayStyle}></div>
            <div className={style.blockContent}>
              <figure className={style.fireLogo}>
                <FlameImage src={logo2} alt={"flamepro"} />
              </figure>
              <ButtonStyleTwo
                text={buttonTitle2}
                textColor="var( --color-secondary)"
                btnFunction={btnFunction}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TwoAddBlockNew;
