import Link from "next/link";
import { useRouter } from "next/router";
import { useFooterContextData } from "@/context/FooterDataContext";
import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import { renderHTML } from "@/utils/htmlString";
import styles from "./fullWidthAdBlock.module.css";

function FullWidthAdBlock({ trayData }) {
  const router = useRouter();
  const { footerContextData } = useFooterContextData();
  const globalAddress = footerContextData?.acf?.footer_contact_address;
  const endIndex = globalAddress?.indexOf('<p>&nbsp;</p>') + 4; // Get the index of '2FT' and add 4 to include '2FT' in the result
  let globalAddTrimed = globalAddress?.slice(0, endIndex);
  globalAddTrimed = globalAddTrimed?.replace(/[^\w\s]$/, '');
  const socialIcons = footerContextData?.acf?.social_icon_and_link;
  const emailAdd = footerContextData?.acf?.contact_email;
  const phoneNum = footerContextData?.acf?.phone_no;
  const isContactUsPage = router?.asPath === '/contact-us';
  const imgSrc = trayData?.image;
  const text = trayData?.enable_address ? globalAddTrimed : trayData?.text;
  const buttonTitle = trayData?.button_title;
  const title = trayData?.title;
  const buttonColor = "var(--color-secondary)";
  const btnTextColor = "var(--color-primary)";
  const buttonText = trayData?.button_title;
  const buttonLink = trayData?.button_link;

  const btnClick = () => {

  };

  return (
    <section className={styles.mainCont}>
      <section className={styles.imageStyles}>
        <FlameImage src={imgSrc} alt="image" />
      </section>
      <section className={isContactUsPage ? styles.overlayContact : styles.overlay}></section>
      <section className={isContactUsPage ? styles.formContact : styles.form}>
        <section className={styles.innerSec}>
          <h3 className={styles.title}>{title}</h3>
          <section className={styles.descSection}>
            <h5 className={styles.desc}>{renderHTML(text)}</h5>
            {trayData?.enable_email_and_phone &&
              <section className={styles.infoSection}>
                <a href={`mailto:${emailAdd}`} className={styles.contactInfo}>
                  <h5 className={styles.contactInfo}>{emailAdd}</h5>
                </a>
                <a href={`tel:${phoneNum}`} >
                  <h5 className={styles.contactInfo}>{phoneNum}</h5>
                </a>
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
              </section>}
          </section>
        </section>
        <Link className={styles.btnSection} href={buttonLink}>
          <FlameBtn
            color={buttonColor}
            text={buttonText}
            textColor={btnTextColor}
            isLoadState={false}
            btnFunction={btnClick}
          />
        </Link>
      </section>
    </section>
  );
}
export default FullWidthAdBlock;
