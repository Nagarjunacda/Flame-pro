import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import FlameImage from "@/reusbleComponents/FlameImage";
import CheckBoxWithText from "../SignUpForm/CheckBoxWithText";
import styles from "./faqitem.module.css";

function FaqItem({ trayData, additionalDataExt }) {
  const [expandFil, setExpandFil] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFil, setSelectedFil] = useState('');
  const downArrowSrc = "/Images/bottomGreyArrow.svg";
  const upArrowSrc = "/Images/upGreyArrow.svg";
  const closeBtnSrc = "/Images/closeImg.png";
  const faqData = additionalDataExt?.faq_select_ext;
  const fireData = faqData?.filter((item) => {
    return item?.post_type_cat?.length && item?.post_type_cat[0]?.name === 'Fire'
  })
  const defenceData = faqData?.filter((item) => {
    return item?.post_type_cat?.length && item?.post_type_cat[0]?.name === 'Defence'
  })
  const finalData = selectedFil === 'Fire' ? fireData : selectedFil === 'Defence' ? defenceData : faqData;

  const handleClearSelections = () => {
    setSelectedFil('')
  }
  const filtersArr = [{ title: 'Fire' }, { title: 'Defence' }];

  const handleItemClick = (item) => {
    setSelectedFil(item?.title);
  }

  return (
    <section className={styles.faqContentBlock}>
      <section className={styles.filtersMainCont}>
        {/* <h3 className={styles.filterHeading}>Filters</h3> */}
        <section className={styles.headSection}>
          <h3 className={styles.filterHeading}>Filter By</h3>
          {selectedFil ? <section className={styles.headBtnSec} onClick={handleClearSelections}>
            <section className={styles.iconSty}>
              <FlameImage src={closeBtnSrc} alt="clear" />
            </section>
            <p className={styles.clearTxt}>Clear Filters</p>
          </section> : null}
        </section>
        <section className={styles.filtersCategory}>
          <section
            className={styles.titleSec}
            onClick={() => { setExpandFil(!expandFil) }}
          >
            <h4 className={styles.filterTitle}>
              Department
            </h4>
            <section className={styles.accorImg}>
              <FlameImage
                src={expandFil ? upArrowSrc : downArrowSrc}
                alt={"arrow"}
              />
            </section>
          </section>
          {expandFil && <section className={styles.categorySection}>
            {filtersArr.map((categoryTitle, index) => {
              const isItemChecked = categoryTitle?.title === selectedFil
              return (
                <section
                  key={index}
                  onClick={() => {
                    handleItemClick(categoryTitle);
                  }}
                >
                  <CheckBoxWithText
                    key={index}
                    text={categoryTitle?.title}
                    isChecked={isItemChecked}
                    setIsChecked={setIsChecked}
                    isDarkMode
                  />
                </section>
              );
            })}
          </section>}
        </section>

      </section>
      <Accordion defaultActiveKey="0" flush className={styles.accordion}>
        {finalData?.map((fqsItems, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <h3>{fqsItems.title?.rendered}</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>{fqsItems?.excerpt}</p>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </section>
  );
}
export default FaqItem;
