import styles from "../footer.module.css";
function CopyRightText() {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.copyRightCont}>
      <p> © Copyright © {currentYear} - Flame Pro</p>
      <p>Designed and Developed by CDA</p>
    </section>
  );
}
export default CopyRightText;
