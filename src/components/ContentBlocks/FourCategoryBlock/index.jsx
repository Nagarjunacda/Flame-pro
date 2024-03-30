import Link from "next/link";
import SliderComp from "@/reusbleComponents/SliderComp";
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import FourCategoryCard from "@/components/Cards/FourCategoryCard";
import styles from './fourCategoryBlock.module.css'

function FourCategoryBlock({ trayData, categories }) {
    const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
    const trayTitle = trayData?.acf_fc_layout
    const categoryType = trayData?.select_category
    const blockTitle = trayData?.title
    const productList = categories?.filter((item) => {
        return item?.category === categoryType
    })

    return <section className={styles.mainCont}>
        {blockTitle && <p className={styles.title}>{blockTitle}</p>}
        {!isDesktop ? <section className={styles.slider}><SliderComp data={productList} title={trayTitle} slidesToShow={4} /></section> :
            <Container fluid>
                <Row>
                    {productList?.map((item, index) => {
                        const route = categoryType === 'Category' ? `/shop-all/${item?.slug}?category=${item?.id}` : `/${item?.slug}?category=${item?.id}`
                        return <Col key={index} md={3} className={styles.col}>
                            <Link href={route}><FourCategoryCard data={item} /></Link>
                        </Col>
                    })}
                </Row>
            </Container>}
    </section>
}
export default FourCategoryBlock