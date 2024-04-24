import styles from "../footer.module.css";

function CopyRightText({ additionalFooterData }) {
  const currentYear = new Date().getFullYear();
  const copyRightText = additionalFooterData?.footer_bottom_text_left;
  const developerText = additionalFooterData?.footer_bottom_text_right;
  const trimmedStr = developerText?.replace(/\bCDA\b\s*$/, '');

  return (
    <section className={styles.copyRightCont}>
      <p>{copyRightText}</p>
      <p>
        {trimmedStr}
        <a href="https://cda.group/" rel="nofollow" target="_blank">
          CDA
        </a>
      </p>
    </section>
  );
}
export default CopyRightText;
