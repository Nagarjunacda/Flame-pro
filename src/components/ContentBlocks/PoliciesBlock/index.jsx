import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import styles from "@/components/ContentBlocks/PoliciesBlock/policies.module.css";

function PoliciesBlock({ trayData }) {
  const policies = trayData?.policies;
  return (
    <section>
      <div className={styles.sidePaddings}>
        <ul className={styles.policesUl}>
          {policies.map((item, index) => {
            return (
              <li className={styles.policesLists}>
                <h3>{item.post_title}</h3>
                <ButtonStyleTwo
                  text={"Read More"}
                  textColor={"var(--color-primary)"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default PoliciesBlock;
