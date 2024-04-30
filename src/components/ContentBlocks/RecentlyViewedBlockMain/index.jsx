import Link from 'next/link';
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import DetailSliderComp from '@/reusbleComponents/DetailSliderComp';
import SliderComp from '@/reusbleComponents/SliderComp';
import styles from './recentlyViewedBlockMain.module.css';

function RecentlyViewedBlockMain() {
    const data = JSON.parse(localStorage.getItem('recentlyViewed'));
    // const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const blockTitle = 'Recently Viewed';
    // const productsData = additionalDataExt?.products_select_ext;

    return <section className={styles.mainCont}>
        <section className={styles.headingSec}>
            <h4>Recently Viewed</h4>
            <Link href={'/shop'}>
                <ButtonStyleTwo
                    text={"Browse All Products"}
                    textColor="var( --color-primary)"
                // btnFunction={btnFunction}
                // btnIcon={backArrowSrc}
                />
            </Link>
        </section>
        <section>
            <SliderComp data={data} title={blockTitle} slidesToShow={3} />
        </section>
    </section>
}
export default RecentlyViewedBlockMain