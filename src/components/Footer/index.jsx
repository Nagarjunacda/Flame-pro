import FooterDweb from "./FooterDweb";
import FooterMweb from "./FooterMweb";
import { useMediaQuery } from "react-responsive";
import styles from "./footer.module.css";

function Footer({ footerData }) {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  return (
    <main>
      {isDesktop ? <FooterDweb footerData={footerData} /> :
        <FooterMweb footerData={footerData} />}
    </main>
  );
}
export default Footer;
