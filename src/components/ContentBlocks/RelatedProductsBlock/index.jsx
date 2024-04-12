import Link from 'next/link';
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import DetailSliderComp from '@/reusbleComponents/DetailSliderComp';
import SliderComp from '@/reusbleComponents/SliderComp';
import styles from './relatedProductsblock.module.css';

function RelatedProductsblock({ trayData }) {
    // const sliderData = trayData?.products_select
    const sliderData = [{ featured_image_url: "/Images/blogImg.svg", name: 'Fire Fighting Kit' }, { featured_image_url: "/Images/blogImg.svg", name: 'Fire Fighting Kit' }, { featured_image_url: "/Images/blogImg.svg", name: 'Fire Fighting Kit' }]
    return <section className={styles.mainCont}>
        <section className={styles.headingSec}>
            <h4>Related Products</h4>
            <Link href={'/shop-all'}>
                <ButtonStyleTwo
                    text={"Browse All Products"}
                    textColor="var( --color-primary)"
                // btnFunction={btnFunction}
                // btnIcon={backArrowSrc}
                />
            </Link>
        </section>
        <section>
            <SliderComp data={sliderData} title={'four_category_blocks'} slidesToShow={3} />
        </section>
    </section>
}
export default RelatedProductsblock