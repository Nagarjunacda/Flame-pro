import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import SignUpForm from "@/components/SignUpForm";
import CopyRightText from "../CopyRightText";
import styles from "../footer.module.css";

function FooterDweb({ footerData }) {
  const router = useRouter();
  const flameImg = "/Images/flameLogo.svg";
  const formHeading = "Sign Up To Our Mailing";
  const footerLinks = footerData?.items ? footerData?.items : [];
  const data1 = ["Useful Links", "Legal", "Contact"];
  const [route, setRoute] = useState('/')

  const handleLabelClick = (label) => {
    if (label?.title === "About Flame Pro") {
      setRoute("/about");
      return;
    }
    if (label?.title === "Policies") {
      setRoute('/Policies')
      return;
    }
    setRoute("/policies");
  };
  const usefulLinks = ["Distributors", "About Flame Pro", "FAQs"];
  const Legal = ["Terms & Conditions", "Privacy Policy", "Cookies"];
  const contact = [
    "FlamePro Global Ltd Unit 2, Dianthus Business Park, Common Lane, Newport,Brough, East Yorkshire,HU15 2FT",
    "info@flame-pro.com",
    "+44 (0)1332 325783",
  ];
  const formData = [
    { section1: "Full Name*" },
    { section1: "Email Address*" },
    { section1: "Area Of Interest*" },
  ];

  const getContactData = (label) => {
    const phoneNumberRegex = /^\+\d{2} \(\d\)\d{4} \d{6}$/;
    const emailRegex = /^info@flame-pro.com$/;
    console.log(phoneNumberRegex.test(label), label, '!!')
    if (phoneNumberRegex.test(label?.title)) {
      const phoneNumber = label?.title.replace(/\s/g, '');
      return <a href={`tel:${phoneNumber}`} className={styles.contactInfo}>{label?.title}</a>
    }
    if (emailRegex.test(label?.title)) {
      return <a href={`mailto:${label?.title}`} className={styles.contactInfo}>{label?.title}</a>
    }
    return <>{label?.title}</>
  }

  return (
    <section className={styles.dwebCont}>
      <section className={styles.dataContDweb}>
        <Link href={"/"} className={styles.flameImg}>
          <FlameImage src={flameImg} alt="logo" />
        </Link>
        <section className={styles.linkListCont}>
          {footerLinks.map((link, index) => {
            return (
              <section key={index} className={styles.navLinks}>
                <h5>{link?.title}</h5>
                <section className={styles.navLinks}>
                  {link?.child_items.map((e, index) => {
                    return (
                      link.title === 'Contact' ? (
                        <div className={styles.contactInfo} key={index}>
                          {getContactData(e)}
                        </div>
                      ) : (
                        <Link
                          href={`/${e?.slug}`}
                          className={styles.innerLinks}
                          key={index}
                        >
                          {e?.title}
                        </Link>
                      )
                    );
                  })}
                  {link?.title === 'Useful Links' && <div className={styles.socialItems}>
                    <Link href={'https://www.linkedin.com/company/flameproltd/'} target="blank" className={styles.socialItem}>
                      <FlameImage src={"/Images/linkedin.svg"} />
                    </Link>
                    <Link href={'https://twitter.com/flameproglobal'} target="blank" className={styles.socialItem}>
                      <FlameImage src={"/Images/twitter.svg"} />
                    </Link>
                  </div>}
                </section>
                {/* {link === "Legal" &&
                  Legal.map((e, index) => {
                    return (
                      <section
                        onClick={() => {
                          handleLabelClick(e);
                        }}
                        className={styles.innerLinks}
                        key={index}
                      >
                        {e}
                      </section>
                    );
                  })} */}
                {/* {link === "Contact" &&
                  contact.map((e, index) => {
                    return (
                      <section className={styles.address} key={index}>
                        {e}
                      </section>
                    );
                  })} */}
              </section>
            );
          })}
        </section>
        <SignUpForm isFromFooter heading={formHeading} formFields={formData} />
      </section>
      <section className={styles.copyRight}>
        <CopyRightText />
      </section>
    </section>
  );
}
export default FooterDweb;
