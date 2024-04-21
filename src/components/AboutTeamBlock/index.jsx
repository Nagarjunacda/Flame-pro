import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutTeamCard from "@/reusbleComponents/AboutTeamCard";
import styles from "./aboutTeamBlock.module.css";
function AboutTeamBlock({ trayData, aboutExt }) {
  return (
    <section>
      <div className={styles.aboutBlockDiv}>
        <h3 className={styles.aboutBlockTitle}>{trayData?.title}</h3>
        <Row className="gx-5 gy-4">
          {aboutExt.map((teamData, index) => (
            <Col lg={4} key={index}>
              <AboutTeamCard teamInfo={teamData} aboutExt={aboutExt} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
export default AboutTeamBlock;
