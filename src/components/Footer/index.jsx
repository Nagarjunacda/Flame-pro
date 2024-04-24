import FooterDweb from "./FooterDweb";
import FooterMweb from "./FooterMweb";
import { useFooterContextData } from "@/context/FooterDataContext";
import { useMediaQuery } from "react-responsive";
import styles from "./footer.module.css";

function Footer({ footerData }) {
  const { footerContextData } = useFooterContextData();
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' });

  return (
    <main>
      {isDesktop ? <FooterDweb footerData={footerData} footerContextData={footerContextData} /> :
        <FooterMweb footerData={footerData} footerContextData={footerContextData} />}
    </main>
  );
}
export default Footer;
