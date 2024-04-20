import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import FlameImage from '@/reusbleComponents/FlameImage';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import styles from './resourceFilters.module.css';

function ResourceFilters() {
    const [mainCatFilter, setMainCatFilter] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});
    const [selectedFilterArr, setSelectedFilterArr] = useState([]);
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const closeBtnSrc = '/Images/offCanvasclose.svg';
    const fireBtncolor = mainCatFilter === 'Fire' ? "var(--color-primary)" : "var(--color-secondary)";
    const fireTextClr = mainCatFilter === 'Fire' ? "var(--color-secondary)" : "var(--color-primary)";
    const defenceBtncolor = mainCatFilter === 'Defence' ? "var(--color-primary)" : "var(--color-secondary)";
    const defenceTextClr = mainCatFilter === 'Defence' ? "var(--color-secondary)" : "var(--color-primary)";
    const upArrow = "/Images/upGreyArrow.svg";
    const downArrow = "/Images/downArrowGrey.svg";
    const filterData = [{ name: 'Select Type', filterList: ['Blogs', 'Videos', 'Downloads', 'Case Studies'] }, { name: 'Select Application', filterList: ['HVP', 'Structural', 'Technical Rescue', 'Wild Fire'] }, { name: 'Select Industry', filterList: ['HVP', 'Structural', 'Technical Rescue', 'Wild Fire'] }];

    const handleMainCatSel = (selectedCat) => {
        setMainCatFilter(selectedCat);
    }

    const handleSelectedCategory = (selectedCat) => {
        if (selectedCategory?.name === selectedCat?.name) {
            setIsDropdownOpen(false);
            setSelectedCategory({});
            return
        }
        setIsDropdownOpen(true);
        setSelectedCategory(selectedCat);
    }

    const handleFilterSelect = (filterName, selectedItem) => {
        setIsDropdownOpen(false)
        const isItemAdded = selectedFilterArr.some((e) => {
            return e?.name === filterName?.name
        })
        const obj = { name: filterName?.name, type: selectedItem }
        if (isItemAdded) {
            const filterArr = selectedFilterArr.filter((e) => {
                return e?.name !== filterName?.name
            });
            setSelectedFilterArr([...filterArr, obj]);
            return;
        }
        setSelectedFilterArr((prev) => [...prev, obj]);
    };

    return <section className={styles.mainCont}>
        <section className={styles.headSection}>
            <h3 className={styles.heading}>Filter By</h3>
            <section className={styles.headBtnSec}>
                <section className={styles.iconSty}>
                    <FlameImage src={closeBtnSrc} alt='clear' />
                </section>
                <p className={styles.clearTxt}>clear</p>
            </section>
        </section>
        <section className={styles.filterList}>
            <section className={styles.fireDefFilter}>
                <FlameBtn color={fireBtncolor}
                    text={"Fire"}
                    textColor={fireTextClr}
                    isLoadState={false}
                    btnFunction={() => { handleMainCatSel('Fire') }}
                    isFromContactForm
                    isSmallBtn={isDesktop ? false : true}
                />
                <FlameBtn color={defenceBtncolor}
                    text={"Defence"}
                    textColor={defenceTextClr}
                    isLoadState={false}
                    btnFunction={() => { handleMainCatSel('Defence') }}
                    isFromContactForm
                    isSmallBtn={isDesktop ? false : true}
                />
            </section>
            <section className={styles.allCatFilterSec}>
                {filterData?.map((mainCat) => (
                    <section className={styles.categoryAndDropdown}>
                        <section className={styles.filterDropDown} onClick={() => { handleSelectedCategory(mainCat) }}>
                            <h3 className={styles.mainCatText}>{mainCat}</h3>
                            <section className={styles.downArrow}>
                                <FlameImage src={selectedCategory?.name === mainCat?.name ? upArrow : downArrow} alt="arrow" />
                            </section>
                        </section>
                        {isDropdownOpen && selectedCategory?.name === mainCat?.name && <section className={styles.dropDownBlock}>
                            {mainCat?.filterList.map((cat) => {
                                return <h4 className={styles.innerCatSec} onClick={() => { handleFilterSelect(mainCat, cat) }}>{cat}</h4>
                            })}
                        </section>}
                    </section>
                ))}
            </section>
        </section>
    </section>
}
export default ResourceFilters