import { useState } from 'react'
import FlameImage from '@/reusbleComponents/FlameImage'
import DetailSliderComp from '@/reusbleComponents/DetailSliderComp'
import styles from '../productDetail.module.css'

function ProductBlock({ productData }) {
    const productName = productData?.name;
    const trayTitle = 'productDetail';
    const imgArr = [{ featured_image_url: 'https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/valiant_770_775_gold_front.jpg' }, { featured_image_url: 'https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/defender-902-903-red-firefighters-wildland-suit-front.jpg' }, { featured_image_url: 'https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/403front.jpg' }, { featured_image_url: 'https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/402front.jpg' }, { featured_image_url: 'https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/638612.jpg' }]
    const initailImage = imgArr[0]?.featured_image_url;
    const [selectedImage, setSelectedImage] = useState(initailImage);
    const magnifierSrc = '/Images/magnifierLogo.svg';

    return <section className={styles.pageContainer}>
        <section className={styles.productBlock}>
            <section className={styles.imageAndText}>
                <h1 className={styles.title}>{productName}</h1>
                <section className={styles.imageBlock}>
                    <section className={styles.mainImg}>
                        <FlameImage src={selectedImage} alt={'productImg'}></FlameImage>
                        <section className={styles.magnifier}>
                            <FlameImage src={magnifierSrc} alt={'magnifier'}></FlameImage>
                        </section>
                    </section>
                    <section className={styles.sliderSection}>
                        <DetailSliderComp data={imgArr} setSelectedImage={setSelectedImage} />
                    </section>
                </section>
            </section>
        </section>
    </section>
}
export default ProductBlock