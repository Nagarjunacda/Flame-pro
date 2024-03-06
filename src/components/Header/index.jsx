import styles from "./header.module.css";
import HeaderMweb from "./HeaderMweb";

function Header({ headerData }) {
  return (
    <main>
      <HeaderMweb headerData={headerData} />
    </main>
  );
}
export default Header;
