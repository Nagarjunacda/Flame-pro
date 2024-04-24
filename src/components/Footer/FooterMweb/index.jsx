import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import CopyRightText from "../CopyRightText";
import SignUpForm from "@/components/SignUpForm";
import { renderHTML } from "@/utils/htmlString";
import styles from "../footer.module.css";

function FooterMweb({ footerData, footerContextData }) {
  const router = useRouter();
  const [clickedLink, setClickedLink] = useState("");
  const [linkData, setLinkData] = useState([]);
  const [accor, setAccor] = useState(false);
  const additionalFooterData = footerContextData && footerContextData?.acf;
  const footerLogo =
    additionalFooterData?.footer_logo || "/Images/footerLogo.svg";
  const socialIcons = additionalFooterData?.social_icon_and_link;
  const contactTitle = additionalFooterData?.footer_contact_title;
  const contactAdd = additionalFooterData?.footer_contact_address;
  const plusIcon = "/Images/plusIcon.svg";
  const formHeading =
    additionalFooterData?.footer_signup_title || "Sign Up To Our Mailing List";
  const phoneNumberRegex = /^\+\d{2} \(\d\)\d{4} \d{6}$/;
  const emailRegex = /^info@flame-pro.com$/;
  const data1 = footerData
    ? footerData?.items?.map((e) => {
        return e?.title;
      })
    : [];

  const handleLabelClick = (label, link) => {
    if (link === "Contact") {
      return;
    }
    if (label === "About Flame Pro") {
      router.push("/about");
      return;
    }
    if (label === "Policies") {
      router.push("/policies");
      return;
    }
    if (label === "FAQs") {
      router.push("/faqs");
      return;
    }
    if (label === "Distributors") {
      router.push("/distributors");
      return;
    }
  };

  const usefulLinksArr = footerData?.items?.filter(
    (e) => e?.title === "Useful Links"
  );
  const usefulLinks =
    usefulLinksArr && usefulLinksArr[0]?.child_items.map((e) => e?.title);
  const legalArr = footerData?.items?.filter((e) => e?.title === "Legal");
  const Legal = legalArr && legalArr[0]?.child_items.map((e) => e?.title);
  const contactArr = footerData?.items?.filter((e) => e?.title === "Contact");
  const contact = contactArr && contactArr[0]?.child_items.map((e) => e?.title);

  // const usefulLinks = [
  //     'Distributors',
  //     'About Flame Pro',
  //     'FAQs',
  // ]
  // const Legal = [
  //     'Terms & Conditions',
  //     'Privacy Policy',
  //     'Cookies',
  // ]
  // const contact = [
  //     'FlamePro Global Ltd Unit 2, Dianthus Business Park, Common Lane, Newport,Brough, East Yorkshire,HU15 2FT',
  //     'info@flame-pro.com',
  //     '+44 (0)1332 325783'
  // ]
  const formData = [
    { section1: "Full Name*" },
    { section1: "Email Address*" },
    { section1: "Area Of Interest*" },
  ];

  const handleAcor = (link) => {
    setAccor(true);
    switch (link) {
      case "Useful Links":
        setClickedLink(link);
        setLinkData(usefulLinks);
        break;
      case "Legal":
        setClickedLink(link);
        setLinkData(Legal);
        break;
      case "Contact":
        setClickedLink(link);
        setLinkData(contact);
        break;
      default:
        return "";
    }
  };

  const handleClose = (link) => {
    setAccor(false);
  };

  const getContactData = (label) => {
    const phoneNumberRegex = /^\+\d{2} \(\d\)\d{4} \d{6}$/;
    const emailRegex = /^info@flame-pro.com$/;
    if (phoneNumberRegex.test(label)) {
      const phoneNumber = label.replace(/\s/g, "");
      return (
        <a href={`tel:${phoneNumber}`} className={styles.contactInfo}>
          {label}
        </a>
      );
    }
    if (emailRegex.test(label)) {
      return (
        <a href={`mailto:${label}`} className={styles.contactInfo}>
          {label}
        </a>
      );
    }
    return <>{label}</>;
  };

  return (
    <section className={styles.mwebCont}>
      <section className={styles.footerLogo}>
        <FlameImage src={footerLogo} alt="logo" />
      </section>
      <section className={styles.linksCont}>
        {data1 &&
          data1.map((link, index) => {
            return (
              <section key={index} className={styles.linksInnerCont}>
                <section className={styles.linkBlock} key={index}>
                  <section>
                    {contactTitle === link ? contactTitle : link}
                  </section>
                  {accor && link === clickedLink ? (
                    <div onClick={handleClose}>-</div>
                  ) : (
                    <section
                      onClick={() => handleAcor(link)}
                      className={styles.icon}
                    >
                      <FlameImage src={plusIcon} alt="icon" />
                    </section>
                  )}
                </section>
                {accor && link === clickedLink && (
                  <section className={styles.listCont}>
                    {clickedLink === contactTitle ? (
                      <section className={styles.listItem}>
                        {renderHTML(contactAdd)}
                      </section>
                    ) : (
                      linkData.map((e, index) => {
                        return (
                          <section
                            onClick={() => {
                              handleLabelClick(e, link);
                            }}
                            key={index}
                            className={styles.listItem}
                          >
                            {e}
                          </section>
                        );
                      })
                    )}
                    {link === "Useful Links" && (
                      <div className={styles.socialItems}>
                        {socialIcons?.map((e, index) => {
                          return (
                            <Link
                              key={index}
                              href={e?.link}
                              target="blank"
                              className={styles.socialItem}
                            >
                              <FlameImage src={e?.image} />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </section>
                )}
              </section>
            );
          })}
      </section>
      <SignUpForm isFromFooter heading={formHeading} formFields={formData} />
      <section className={styles.copyRightCont}>
        <CopyRightText additionalFooterData={additionalFooterData} />
      </section>
    </section>
  );
}
export default FooterMweb;
