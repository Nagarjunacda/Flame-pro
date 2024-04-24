import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutTeamCard from "@/reusbleComponents/AboutTeamCard";
import styles from "./aboutTeamBlock.module.css";

function AboutTeamBlock({ trayData, aboutExt }) {
  return (
    <section>
      <div className={styles.aboutBlockDiv}>
        <h3 className={styles.aboutBlockTitle}>{trayData?.title}</h3>
        <Row className="gx-3 gy-3 gx-lg-4 gx-xl-5 gy-xl-5">
          {aboutExt.map((teamData, index) => (
            <Col sm={6} lg={4} key={index}>
              <AboutTeamCard teamInfo={teamData} aboutExt={aboutExt} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
export default AboutTeamBlock;
