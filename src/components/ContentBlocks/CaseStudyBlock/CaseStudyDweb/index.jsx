import { useState } from "react";
import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import CaseStudyCard from "@/components/Cards/CaseStudyCard";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import styles from "../caseStudyBlock.module.css";

function CaseStudyDweb({ data }) {
  const [selectedCategory, setSelectedCategory] = useState(data[0]);
  const imgSrc = "/Images/rightRedArrow.svg";
  const selectedArr = selectedCategory?.wordpress_category_taxonomy?.child;
  const selectedName = selectedArr ? selectedArr[0] : ''


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className={styles.dwebCont}>
      <section className={styles.headingAndCategory}>
        <section className={styles.heading}>
          <h5 className={styles.title}>Case Studies</h5>
          <Link href={"/case-studies"}>
            <ButtonStyleTwo
              text={"View All Case Studies"}
              textColor="var( --color-primary)"
            />
          </Link>
        </section>
        <section className={styles.categories}>
          {data.map((category, index) => {
            const categoryArr = category?.wordpress_category_taxonomy?.child;
            const catName = categoryArr ? categoryArr[0] : '';
            return (
              <section key={index} className={styles.categoryItem}>
                <p
                  key={index}
                  onClick={() => {
                    handleCategoryClick(category);
                  }}
                  className={
                    catName === selectedName
                      ? styles.active
                      : styles.caseStudyItem
                  }
                >
                  {catName}
                </p>
                {catName === selectedName && (
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
        <Link href="/case-studies">
          <CaseStudyCard data={selectedCategory} />
        </Link>
        {/* </section>
        </section>
        <section className={styles.cardSection}>
          <CaseStudyCard data={selectedCategory} /> */}
      </section>
    </section>
  );
}
export default CaseStudyDweb;
