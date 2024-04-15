import HeaderMweb from "./HeaderMweb";
import HeaderDweb from "./HeaderDweb";
import { useMediaQuery } from "react-responsive";
import styles from "./header.module.css";

function Header({ headerData, relativeHeader, scrolled }) {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  return (
    <main>
      {isDesktop ? <HeaderDweb scrolled={scrolled} headerData={headerData} isFromDrawer={false} relativeHeader={relativeHeader} /> :
        <HeaderMweb scrolled={scrolled} headerData={headerData} relativeHeader={relativeHeader} />}
    </main>
  );
}
export default Header;
