import SliderComp from "@/reusbleComponents/SliderComp";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './fourCategoryBlock.module.css'

function FourCategoryBlock({ trayData, categories }) {
    console.log(categories, '!! tray')
    const trayTitle = trayData?.acf_fc_layout
    const categoryType = trayData?.select_category
    const blockTitle = trayData?.title
    const productList = categories?.filter((item) => {
        return item?.category === categoryType
    })

    return <section className={styles.mainCont}>
        {blockTitle && <p className={styles.title}>{blockTitle}</p>}
        <section className={styles.slider}><SliderComp data={productList} title={trayTitle} slidesToShow={4} /></section>
    </section>
}
export default FourCategoryBlock