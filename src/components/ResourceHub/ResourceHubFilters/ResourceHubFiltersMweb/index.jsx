import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import CheckBoxWithText from "@/components/SignUpForm/CheckBoxWithText";
import styles from './resourceHubFiltersMweb.module.css';

function ResourceHubFiltersMweb({ filtersData, setSelectedFilterArr, mainCatFilter, setMainCatFilter, setItemsNumbers, setSelectedPageNum }) {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [itemsArray, setItemsArray] = useState([]);
    const router = useRouter();
    const slug = router?.query?.slug;
    const str = slug ? slug : '';
    const result = str.includes('-') ? str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()) : str;
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    const obj = { name: finalResult, taxonomy: 'category', slug: str }
    const scrollToTop =
        typeof window !== "undefined" && document.getElementById("scrollId");
    const downArrowSrc = "/Images/downWhiteArrow.svg";
    const upArrowSrc = "/Images/upWhiteArrow.svg";
    const btnColor = "var(--color-primary)";
    const textColor = "var(--color-secondary)";
    const btnText = "Apply Filters";
    const closeBtnSrc = "/Images/closeImg.png";
    const showClearSel = slug ? itemsArray?.length > 1 : itemsArray?.length ? itemsArray?.length : mainCatFilter === 'fire' || mainCatFilter === 'defence';

    const handleFilterWindow = () => {
        setShowFilters(!showFilters);
    };

    const handleItemClick = async (item) => {
        if (slug && item?.taxonomy === 'category') {
            return
        }
        if (item?.slug === 'fire' || item?.slug === 'defence') {
            if (mainCatFilter === item?.slug) {
                setMainCatFilter('');
                return;
            }
            setMainCatFilter(item?.slug)
            return
        }
        const isFilterUnchecked = itemsArray.some(
            (filter) => filter?.slug === item?.slug
        );
        let updatedArray;

        if (isFilterUnchecked) {
            updatedArray = itemsArray.filter(
                (filter) => filter?.slug !== item?.slug
            );
        } else {
            updatedArray = [...itemsArray, item];
        }
        setItemsArray(updatedArray);
        // getFilteredProducts(updatedArray);
        setSelectedItem(item);
    };

    const handleApplyBtn = () => {
        // getFilteredProducts(itemsArray);
        setSelectedFilterArr(itemsArray);
        setShowFilters(false);
        scrollToTop.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (slug) {
            setItemsArray([obj])
            // setCategoryArr(['Categories'])
            setSelectedFilterArr([obj]);
        }
    }, [slug])

    const handleClearSelections = () => {
        if (slug) {
            setItemsArray([obj])
            // setCategoryArr(['Categories'])
            setSelectedFilterArr([obj]);
            return
        }
        setItemsNumbers(10);
        setSelectedPageNum(1)
        setShowFilters(false);
        setItemsArray([]);
        setMainCatFilter('');
        setSelectedFilterArr([]);
        scrollToTop.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className={styles.mainCont}>
            <section
                className={styles.heading}
                onClick={handleFilterWindow}
                id="scrollId"
            >
                <h5 className={styles.filter}>Filters</h5>
                <section className={styles.img}>
                    <FlameImage
                        src={showFilters ? downArrowSrc : upArrowSrc}
                        alt={"downArrow"}
                    />
                </section>
            </section>
            {showFilters && (
                <section className={styles.filterSec}>
                    {filtersData.map((category, index) => {
                        return (
                            <section key={index} className={styles.filtersCategory}>
                                <h4 className={styles.filterTitle}>
                                    {category?.name}
                                </h4>
                                <section className={styles.categorySection}>
                                    {category?.data?.map((categoryTitle, index) => {
                                        const isItemChecked = itemsArray?.some(
                                            (item) => item.slug === categoryTitle?.slug
                                        ) || categoryTitle?.slug === mainCatFilter;
                                        return (
                                            <section
                                                key={index}
                                                onClick={() => {
                                                    handleItemClick(categoryTitle);
                                                }}
                                            >
                                                <CheckBoxWithText
                                                    key={index}
                                                    text={categoryTitle?.name}
                                                    isChecked={isItemChecked}
                                                    setIsChecked={setIsChecked}
                                                    isDarkMode
                                                />
                                            </section>
                                        );
                                    })}
                                </section>
                            </section>
                        );
                    })}
                </section>
            )}
            {showFilters && (
                <section className={styles.submitSec}>
                    <section className={styles.btnStyle}>
                        <FlameBtn
                            color={btnColor}
                            text={btnText}
                            textColor={textColor}
                            isLoadState={false}
                            btnFunction={handleApplyBtn}
                            isSmallBtn
                        />
                    </section>
                    {showClearSel ? <section
                        className={styles.headBtnSec}
                        onClick={handleClearSelections}
                    >
                        <section className={styles.iconSty}>
                            <FlameImage src={closeBtnSrc} alt="clear" />
                        </section>
                        <p className={styles.clearTxt}>Clear Filters</p>
                    </section> : null}
                </section>
            )}
        </section>
    );
}
export default ResourceHubFiltersMweb;
