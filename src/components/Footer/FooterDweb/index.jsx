import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import SignUpForm from "@/components/SignUpForm";
import CopyRightText from "../CopyRightText";
import { renderHTML } from "@/utils/htmlString";
import styles from "../footer.module.css";

function FooterDweb({ footerData, footerContextData }) {
  const footerLinks = footerData?.items ? footerData?.items : [];
  const additionalFooterData = footerContextData && footerContextData?.acf;
  const footerLogo = additionalFooterData?.footer_logo;
  const socialIcons = additionalFooterData?.social_icon_and_link;
  const signupTitle = additionalFooterData?.footer_signup_title;
  const contactTitle = additionalFooterData?.footer_contact_title;
  const contactAddress = additionalFooterData?.footer_contact_address;


  const formData = [
    { section1: "Full Name*" },
    { section1: "Email Address*" },
    { section1: "Area Of Interest*" },
  ];

  const getContactData = (label) => {
    const phoneNumberRegex = /^\+\d{2} \(\d\)\d{4} \d{6}$/;
    const emailRegex = /^info@flame-pro.com$/;
    if (phoneNumberRegex.test(label?.title)) {
      const phoneNumber = label?.title.replace(/\s/g, "");
      return (
        <a href={`tel:${phoneNumber}`} className={styles.contactInfo}>
          {label?.title}
        </a>
      );
    }
    if (emailRegex.test(label?.title)) {
      return (
        <a href={`mailto:${label?.title}`} className={styles.contactInfo}>
          {label?.title}
        </a>
      );
    }
    return <>{label?.title}</>;
  };

  return (
    <section className={styles.dwebCont}>
      <section className={styles.dataContDweb}>
        <Link href={"/"} className={styles.flameImg}>
          <FlameImage src={footerLogo} alt="logo" imageFit />
        </Link>
        <section className={styles.linkListCont}>
          {footerLinks.map((link, index) => {
            return (
              <section key={index} className={styles.navLinks}>
                <h5>{link?.title === contactTitle ? contactTitle : link?.title}</h5>
                <section className={styles.navLinks}>
                  {link?.child_items.map((e, index) => {
                    return link.title === contactTitle ? (
                      index === 1 &&
                      <div className={styles.contactInfo} key={index}>
                        {renderHTML(contactAddress)}
                      </div>
                    ) : (
                      <Link
                        href={`/${e?.slug}`}
                        className={styles.innerLinks}
                        key={index}
                      >
                        {e?.title}
                      </Link>
                    );
                  })}
                  {link?.title === "Useful Links" && (
                    <div className={styles.socialItems}>
                      {socialIcons?.map((e) => {
                        return <Link
                          href={e?.link}
                          target="blank"
                          className={styles.socialItem}
                        >
                          <FlameImage src={e?.image} />
                        </Link>
                      })}
                    </div>
                  )}
                </section>
              </section>
            );
          })}
        </section>
        <SignUpForm isFromFooter heading={signupTitle} formFields={formData} />
      </section>
      <section className={styles.copyRight}>
        <CopyRightText additionalFooterData={additionalFooterData} />
      </section>
    </section>
  );
}
export default FooterDweb;
