import styles from "../footer.module.css";

function CopyRightText() {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.copyRightCont}>
      <p> © Copyright {currentYear} - FlamePro</p>
      <p>
        Designed and Developed by{" "}
        <a href="https://cda.group/" rel="nofollow" target="_blank">
          CDA
        </a>
      </p>
    </section>
  );
}
export default CopyRightText;
