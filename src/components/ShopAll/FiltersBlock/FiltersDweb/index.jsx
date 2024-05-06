import { useEffect, useState } from "react";
import CheckBoxWithText from "@/components/SignUpForm/CheckBoxWithText";
import FlameImage from "@/reusbleComponents/FlameImage";
import styles from "../filters.module.css";

function FiltersDweb({
  filtersData,
  getFilteredProducts,
  products,
  setSelectedPageNum,
  setItemsNumbers,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [itemsArray, setItemsArray] = useState([]);
  const [categoryArr, setCategoryArr] = useState([]);
  const downArrowSrc = "/Images/bottomGreyArrow.svg";
  const upArrowSrc = "/Images/upGreyArrow.svg";
  const closeBtnSrc = "/Images/closeImg.png";

  const handleItemClick = async (item) => {
    const isFilterUnchecked = itemsArray.some(
      (filter) => filter?.title === item?.title
    );
    let updatedArray;

    if (isFilterUnchecked) {
      updatedArray = itemsArray.filter(
        (filter) => filter?.title !== item?.title
      );
    } else {
      updatedArray = [...itemsArray, item];
    }
    setItemsArray(updatedArray);
    getFilteredProducts(updatedArray);
    setSelectedItem(item);
  };

  const handleAccorClick = (category) => {
    const isCategorySelected = categoryArr.includes(category?.taxonomy);
    if (isCategorySelected) {
      const filterArr = categoryArr.filter((e) => e !== category?.taxonomy);
      setCategoryArr(filterArr);
      return;
    }
    setCategoryArr((prev) => [...prev, category?.taxonomy]);
  };

  const handleClearSelections = () => {
    setItemsArray([]);
    setCategoryArr([]);
    getFilteredProducts([]);
    setSelectedPageNum(1);
    setItemsNumbers(10);
    // setMainCatFilter('');
    // setSelectedFilterArr([]);
    // setItemsNumbers(10);
    // setSelectedPageNum(1);
  };

  return (
    <section className={styles.mainCont}>
      {/* <h3 className={styles.filterHeading}>Filters</h3> */}
      <section className={styles.headSection}>
        <h3 className={styles.filterHeading}>Filter By</h3>
        {itemsArray?.length ? <section className={styles.headBtnSec} onClick={handleClearSelections}>
          <section className={styles.iconSty}>
            <FlameImage src={closeBtnSrc} alt="clear" />
          </section>
          <p className={styles.clearTxt}>Clear Filters</p>
        </section> : null}
      </section>
      <section className={styles.filtersCont}>
        {filtersData.map((category, index) => {
          const isCategorysel = categoryArr.includes(category?.taxonomy);
          return (
            <section key={index} className={styles.filtersCategory}>
              <section
                className={styles.titleSec}
                onClick={() => handleAccorClick(category)}
              >
                <h4 className={styles.filterTitle}>
                  {category?.taxonomy_title}
                </h4>
                <section className={styles.accorImg}>
                  <FlameImage
                    src={isCategorysel ? upArrowSrc : downArrowSrc}
                    alt={"arrow"}
                  />
                </section>
              </section>
              {isCategorysel && (
                <section className={styles.categorySection}>
                  {category?.terms?.map((categoryTitle, index) => {
                    const isItemChecked = itemsArray?.some(
                      (item) => item.title === categoryTitle?.title
                    );
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
                </section>
              )}
            </section>
          );
        })}
      </section>
    </section>
  );
}
export default FiltersDweb;
