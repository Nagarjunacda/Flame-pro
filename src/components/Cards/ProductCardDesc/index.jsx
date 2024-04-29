import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import styles from './productCardDesc.module.css';
import FlameBtn from '@/reusbleComponents/FlameBtn';

function ProductCardDesc() {
    const cardImage = 'https://cms.cdastagging.com/wp-content/uploads/2024/04/171-VA1-NNF-GLD_1-1.jpg';
    const btnText = 'Discover Now';
    const btnTextClr = 'var(--color-primary)';
    const btnColor = 'var(--color-secondary)';

    const handleBtnClick = () => { }

    return <Card className={styles?.cardCont}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        {/* {isOnSale && <section className={styles.saleLabel}>Sale</section>}
        <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
        </Card.Body> */}
        <section className={styles.overlayCont}>
            <h3 className={styles.overlayHeading}>We Create Custom Orders</h3>
            <p className={styles.overlayText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <FlameBtn color={btnColor}
                text={btnText}
                textColor={btnTextClr}
                isLoadState={false}
                btnFunction={handleBtnClick}
                isSmallBtn />
        </section>
    </Card>
}
export default ProductCardDesc