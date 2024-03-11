import FooterDweb from "./FooterDweb";
import FooterMweb from "./FooterMweb";
import { useMediaQuery } from "react-responsive";
import styles from "./footer.module.css";

function Footer() {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  return (
    <main>
      {isDesktop ? <FooterDweb /> :
        <FooterMweb />}
    </main>
  );
}
export default Footer;
