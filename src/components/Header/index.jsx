import styles from "./header.module.css";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <main className={styles.header}>
      <p>This is the header component</p>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </main>
  );
}
export default Header;
