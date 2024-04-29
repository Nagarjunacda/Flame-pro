import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { renderHTML } from '@/utils/htmlString';
import styles from './productCardDesc.module.css';
import FlameBtn from '@/reusbleComponents/FlameBtn';

function ProductCardDesc({ product }) {
    const router = useRouter();
    const cardImage = product?.images?.length && product?.images[0]?.src;
    const heading = product?.name;
    const desc = product?.description;
    const ctaData = product?.attributes;
    const ctaTextData = ctaData?.length && ctaData.filter((item) => item?.name === "Button Name");
    const btnText = ctaTextData?.length && ctaTextData[0]?.terms?.length && ctaTextData[0]?.terms[0]?.name;
    const btnLinkData = ctaData?.length && ctaData.filter((item) => item?.name === "Button Link");
    const btnLink = btnLinkData?.length && btnLinkData[0]?.terms?.length && btnLinkData[0]?.terms[0]?.name;
    const btnTextClr = 'var(--color-primary)';
    const btnColor = 'var(--color-secondary)';

    const handleBtnClick = () => {
        router.push(btnLink);
    }

    return <Card className={styles?.cardCont}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImg} />
        {/* {isOnSale && <section className={styles.saleLabel}>Sale</section>}
        <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
        </Card.Body> */}
        <section className={styles.overlayCont}>
            <h3 className={styles.overlayHeading}>{heading}</h3>
            <p className={styles.overlayText}>{renderHTML(desc)}</p>
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