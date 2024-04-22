import { useState } from "react";
import FlameImage from "../FlameImage";
import FlameBtn from "../FlameBtn";
import styles from "./aboutTeamCard.module.css";
import AboutPopup from "../AboutPopup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutTeamCard({ teamInfo, aboutExt }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function openPopup() {
    setShowPopup(true);
  }

  return (
    <section className={styles.teamCardContainer}>
      <div
        className={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure className={styles.teamPic}>
          <FlameImage src={teamInfo?.featured_image_url} />
        </figure>
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
          <div className={styles.teamInfoDiv}>
            <h3 className={styles.teamName}>{teamInfo?.title?.rendered}</h3>
            <p>{teamInfo?.name_and_company_title}</p>
            <FlameBtn
              text={"Find Out More"}
              color={"var(--color-secondary)"}
              textColor={"var(--color-primary)"}
              className={styles.teamButton}
              btnFunction={openPopup}
            />
          </div>
        </div>
      </div>
      <AboutPopup show={showPopup} setShow={setShowPopup} teamInfo={teamInfo} />
    </section>
  );
}

export default AboutTeamCard;
