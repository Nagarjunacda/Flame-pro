import HeaderMweb from "./HeaderMweb";
import HeaderDweb from "./HeaderDweb";
import { useMediaQuery } from "react-responsive";
import styles from "./header.module.css";

function Header({ headerData }) {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  return (
    <main>
      {isDesktop ? <HeaderDweb headerData={headerData} /> :
        <HeaderMweb headerData={headerData} />}
    </main>
  );
}
export default Header;
