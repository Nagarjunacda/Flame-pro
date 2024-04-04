import { useState } from 'react'
import CheckBoxWithText from '@/components/SignUpForm/CheckBoxWithText'
import styles from '../filters.module.css'

function FiltersDweb({ filtersData, getFilteredProducts, products }) {
    const [isChecked, setIsChecked] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [itemsArray, setItemsArray] = useState([])

    const handleItemClick = async (item) => {
        const isFilterUnchecked = itemsArray.some(filter => filter?.title === item?.title);
        let updatedArray;

        if (isFilterUnchecked) {
            updatedArray = itemsArray.filter(filter => filter?.title !== item?.title);
        } else {
            updatedArray = [...itemsArray, item];
        }
        setItemsArray(updatedArray);
        getFilteredProducts(updatedArray);
        setSelectedItem(item);
    }

    return <section className={styles.mainCont}>
        <h3 className={styles.filterHeading}>Filters</h3>
        <section className={styles.filtersCont}>
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
    </section>
}
export default FiltersDweb