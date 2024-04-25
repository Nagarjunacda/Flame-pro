import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import CheckBoxWithText from "../SignUpForm/CheckBoxWithText";
import TeamBlockContactForm from "../TeamBlockContactForm";
import FlameImage from "@/reusbleComponents/FlameImage";
import AboutTeamCard from "@/reusbleComponents/AboutTeamCard";
import styles from "./aboutTeamBlock.module.css";

function AboutTeamBlock({ trayData, aboutExt }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const offCanvasClose = '/Images/offCanvasClose.svg';
  const personName = selectedMember?.title?.rendered || 'Person Name';
  const jobTitle = 'Job Title';
  const description = selectedMember?.excerpt || '';

  const formData = isDesktop ? [
    { section1: "Full Name*", section2: "Email Address*" },
    // { section1: "Email Address*" },
    // { section1: "Phone Number*" },
    { section1: "Company Name*", section2: "Phone Number*" },
    { section1: "Job Title*" },
    { section1: "Message*" }
  ] : [{ section1: "Full Name*" },
  { section1: "Email Address*" },
  { section1: "Company Name*" },
  { section1: "Phone Number*" },
  { section1: "Job Title*" },
  { section1: "Message*" }];

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <section>
      <div className={styles.aboutBlockDiv}>
        <h3 className={styles.aboutBlockTitle}>{trayData?.title}</h3>
        <Row className="gx-3 gy-3 gx-lg-4 gx-xl-5 gy-xl-5">
          {aboutExt.map((teamData, index) => (
            <Col sm={6} lg={4} key={index}>
              <AboutTeamCard teamInfo={teamData} aboutExt={aboutExt} setShowPopup={setShowPopup} setSelectedMember={setSelectedMember} />
            </Col>
          ))}
        </Row>
      </div>
      {showPopup && <div className={styles.popupBackground} onClick={closePopup}>
        <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
          <section className={styles.closeBtnSec}>
            <figure className={styles.closeBtn} onClick={closePopup}>
              <FlameImage src={offCanvasClose} alt='closeBtn' />
            </figure>
          </section>
          <section className={styles.personInfo}>
            <section className={styles.imageSection}>
              <FlameImage src={selectedMember?.featured_image_url} alt={'memberImg'} />
            </section>
            <section className={styles.personDesc}>
              <h3 className={styles.personName}>{personName}</h3>
              <h4 className={styles.jobTitle}>{jobTitle}</h4>
              <p className={styles.desc}>{description}</p>
            </section>
          </section>
          <TeamBlockContactForm
            isFromPopup={false}
            heading={`Contact Person's Name`}
            formFields={formData}
            heading2={""} />
        </div>
      </div>}
    </section>
  );
}
export default AboutTeamBlock;
