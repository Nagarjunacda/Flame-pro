import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import styles from "@/components/ContentBlocks/PoliciesBlock/policies.module.css";
import Link from "next/link";

function PoliciesBlock({ trayData }) {
  const policies = trayData?.policies;
  return (
    <section>
      <div className={styles.sidePaddings}>
        <ul className={styles.policesUl}>
          {policies.map((item, index) => {
            return (
              <li className={styles.policesLists} key={index}>
                <h3>{item.post_title}</h3>
                <Link href={`/policies/${item?.post_name}`}>
                  <ButtonStyleTwo
                    text={"Read More"}
                    textColor={"var(--color-primary)"}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default PoliciesBlock;
