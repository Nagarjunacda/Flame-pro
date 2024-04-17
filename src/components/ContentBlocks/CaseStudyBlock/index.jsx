import SliderComp from "@/reusbleComponents/SliderComp";
import { useMediaQuery } from "react-responsive";
import CaseStudyDweb from "./CaseStudyDweb";
import styles from "./caseStudyBlock.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import Link from "next/link";

function CaseStudyBlock({ trayData, caseStudyExt }) {
  const { title, button_title } = trayData;
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });

  return (
    <>
      {!isDesktop ? (
        <section className={styles.mainCont}>
          <section className={styles.heading}>
            <h5 className={styles.title}>{title}</h5>
            <Link href={"/resource-hub/case-studies"}>
              <ButtonStyleTwo
                text={"View All Case Studies"}
                textColor="var( --color-primary)"
              />
            </Link>
          </section>
          <section className={styles.slider}>
            <SliderComp data={caseStudyExt} title={title} />
          </section>
        </section>
      ) : (
        <CaseStudyDweb data={caseStudyExt} />
      )}
    </>
  );
}
export default CaseStudyBlock;
