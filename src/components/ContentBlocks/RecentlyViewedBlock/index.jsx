import Link from "next/link";
import SliderComp from "@/reusbleComponents/SliderComp";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import RecentlyViewedCard from "@/components/Cards/RecentlyViewedCard";
import styles from "./recentlyViewedBlock.module.css";

function RecentlyViewedBlock() {
    const data = JSON.parse(localStorage.getItem('recentlyViewed'));
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const blockTitle = 'Recently Viewed';

    return <section className={styles.mainCont}>
        {blockTitle && <p className={styles.title}>{blockTitle}</p>}
        {!isDesktop ? <section className={styles.slider}>
            <SliderComp data={data} title={blockTitle} slidesToShow={4} /></section> :
            <Container fluid>
                <Row>
                    {data?.map((item, index) => {
                        const route = `/shop/${item?.slug}/${item?.id}`
                        return <Col key={index} md={3} className={styles.col}>
                            <Link href={route}><RecentlyViewedCard data={item} /></Link>
                        </Col>
                    })}
                </Row>
            </Container>}
    </section>
}
export default RecentlyViewedBlock