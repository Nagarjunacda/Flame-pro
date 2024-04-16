import styles from "../footer.module.css";
import Link from "next/link";
function CopyRightText() {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.copyRightCont}>
      <p> © Copyright © {currentYear} - Flame Pro</p>
      <p>
        Designed and Developed by <Link href={"https://cda.group/"}>CDA</Link>
      </p>
    </section>
  );
}
export default CopyRightText;
