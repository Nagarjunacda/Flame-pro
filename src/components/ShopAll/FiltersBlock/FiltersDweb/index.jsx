import { useState } from 'react'
import CheckBoxWithText from '@/components/SignUpForm/CheckBoxWithText'
import styles from '../filters.module.css'

function FiltersDweb({ filtersData }) {
    const [isChecked, setIsChecked] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [itemsArray, setItemsArray] = useState([])

    const handleItemClick = (item) => {
        if (itemsArray?.includes(item?.title)) {
            setItemsArray(itemsArray.filter(title => title !== item?.title));
        }
        setSelectedItem(item)
        itemsArray.push(item?.title)
    }

    return <section className={styles.mainCont}>
        <h3 className={styles.filterHeading}>Filters</h3>
        <section className={styles.filtersCont}>
            {filtersData.map((category, index) => {
                return <section key={index} className={styles.filtersCategory}>
                    <h4 className={styles.filterTitle}>{category?.taxonomy_title}</h4>
                    <section className={styles.categorySection}>
                        {category?.terms?.map((categoryTitle, index) => {
                            const isItemChecked = itemsArray?.includes(categoryTitle?.title)
                            return <section onClick={() => { handleItemClick(categoryTitle) }}><CheckBoxWithText key={index} text={categoryTitle?.title} isChecked={isItemChecked} setIsChecked={setIsChecked} isDarkMode /></section>
                        })}
                    </section>
                </section>
            })}
        </section>
    </section>
}
export default FiltersDweb