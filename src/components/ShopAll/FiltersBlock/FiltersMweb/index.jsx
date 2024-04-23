import { useState } from 'react';
import FlameImage from '@/reusbleComponents/FlameImage';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import CheckBoxWithText from '@/components/SignUpForm/CheckBoxWithText';
import styles from './filtersMweb.module.css';

function FiltersMweb({ filtersData, getFilteredProducts }) {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [itemsArray, setItemsArray] = useState([]);
    const scrollToTop = typeof window !== 'undefined' && document.getElementById("scrollId");
    const downArrowSrc = '/Images/downWhiteArrow.svg';
    const upArrowSrc = '/Images/upWhiteArrow.svg';
    const btnColor = 'var(--color-primary)';
    const textColor = 'var(--color-secondary)';
    const btnText = 'Apply Filters';
    const closeBtnSrc = "/Images/offCanvasclose.svg";

    const handleFilterWindow = () => {
        setShowFilters(!showFilters)
    }

    const handleItemClick = async (item) => {
        const isFilterUnchecked = itemsArray.some(filter => filter?.title === item?.title);
        let updatedArray;

        if (isFilterUnchecked) {
            updatedArray = itemsArray.filter(filter => filter?.title !== item?.title);
        } else {
            updatedArray = [...itemsArray, item];
        }
        setItemsArray(updatedArray);
        // getFilteredProducts(updatedArray);
        setSelectedItem(item);
    }

    const handleApplyBtn = () => {
        getFilteredProducts(itemsArray);
        setShowFilters(false);
        scrollToTop.scrollIntoView({ behavior: "smooth" });
    }


    const handleClearSelections = () => {
        setShowFilters(false);
        setItemsArray([]);
        getFilteredProducts([]);
        scrollToTop.scrollIntoView({ behavior: "smooth" });
    };

    return <section className={styles.mainCont}>
        <section
            className={styles.heading}
            onClick={handleFilterWindow}
            id="scrollId"
        >
            <h5 className={styles.filter}>Filters</h5>
            <section className={styles.img}>
                <FlameImage src={showFilters ? downArrowSrc : upArrowSrc} alt={'downArrow'} />
            </section>
        </section>
        {showFilters && (
            <section className={styles.filterSec}>
                {filtersData.map((category, index) => {
                    return <section key={index} className={styles.filtersCategory}>
                        <h4 className={styles.filterTitle}>{category?.taxonomy_title}</h4>
                        <section className={styles.categorySection}>
                            {category?.terms?.map((categoryTitle, index) => {
                                const isItemChecked = itemsArray?.some(item => item.title === categoryTitle?.title);
                                return <section key={index} onClick={() => { handleItemClick(categoryTitle) }}><CheckBoxWithText key={index} text={categoryTitle?.title} isChecked={isItemChecked} setIsChecked={setIsChecked} isDarkMode /></section>
                            })}
                        </section>
                    </section>
                })}
            </section>
        )}
        {showFilters && <section className={styles.submitSec}><section className={styles.btnStyle}>
            <FlameBtn color={btnColor} text={btnText} textColor={textColor} isLoadState={false} btnFunction={handleApplyBtn} />
        </section>
            <section
                className={styles.headBtnSec}
                onClick={handleClearSelections}
            >
                <section className={styles.iconSty}>
                    <FlameImage src={closeBtnSrc} alt="clear" />
                </section>
                <p className={styles.clearTxt}>clear Filters</p>
            </section></section>}
    </section>
}
export default FiltersMweb