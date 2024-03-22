import styles from "./basketTitle.module.css";
const BasketTitleBlock = ({ title, subHeading, description }) => {
  return (
    <section className={styles.bastetSection}>
      <div className={styles.basketcontent}>
        <h2>{title}</h2>
        {subHeading && <h3>{subHeading}</h3>}
        <p>{description}</p>
      </div>
    </section>
  );
};
export default BasketTitleBlock;
