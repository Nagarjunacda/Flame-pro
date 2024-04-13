import styles from "./basketTitle.module.css";

const BasketTitleBlock = ({ title, subHeading, description }) => {

  return (
    <section className={styles.bastetSection}>
      <section className={styles.basketcontent}>
        <h2 className={styles.title}>{title}</h2>
        {subHeading && <h3>{subHeading}</h3>}
        <p>{description}</p>
      </section>
    </section>
  );
};
export default BasketTitleBlock;
