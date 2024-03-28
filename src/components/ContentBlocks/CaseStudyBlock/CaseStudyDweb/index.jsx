import { useState } from "react";
import FlameImage from "@/reusbleComponents/FlameImage";
import CaseStudyCard from "@/components/Cards/CaseStudyCard";
import styles from "../caseStudyBlock.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function CaseStudyDweb({ data }) {
  const [selectedCategory, setSelectedCategory] = useState(data[0]);
  const imgSrc = "/Images/rightRedArrow.svg";

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className={styles.dwebCont}>
      <section className={styles.headingAndCategory}>
        <section className={styles.heading}>
          <h5 className={styles.title}>Case Studies</h5>
          <ButtonStyleTwo
            text={"View All Case Studies"}
            textColor="var( --color-primary)"
          />
        </section>
        <section className={styles.categories}>
          {data.map((category, index) => {
            return (
              <section className={styles.categoryItem}>
                <p
                  key={index}
                  onClick={() => {
                    handleCategoryClick(category);
                  }}
                >
                  {category?.name}
                </p>
                {category?.name === selectedCategory?.name && (
                  <section className={styles.rightArrow}>
                    {" "}
                    <FlameImage src={imgSrc} alt="rightArr" />
                  </section>
                )}
              </section>
            );
          })}
        </section>
      </section>
      <section className={styles.cardSection}>
        <CaseStudyCard data={selectedCategory} />
      </section>
    </section>
  );
}
export default CaseStudyDweb;
