import FlameImage from '@/reusbleComponents/FlameImage'
import FlameBtn from '@/reusbleComponents/FlameBtn'
import { renderHTML } from '@/utils/htmlString'
import styles from './imageRightTextLeft.module.css'

function ImageRightTextLeft({ trayData }) {
    const imageBanner = trayData?.image
    const title = trayData?.title
    const desc = trayData?.text
    const buttonText = trayData?.button1_text
    const buttonColor = 'var(--color-primary)'
    const textColor = 'var(--color-secondary)'

    const handleBtnClick = () => { }

    return <section className={styles.mainCont}>
        <section className={styles.textBlock}>
            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{renderHTML(desc)}</p>
            {buttonText && <section className={styles.btnSection}>
                <FlameBtn color={buttonColor} text={buttonText} textColor={textColor} isLoadState={false} btnFunction={handleBtnClick} />
            </section>}
        </section>
        <section className={styles.imageBlock}>
            <FlameImage src={imageBanner} alt={'bannerImg'} />
        </section>
    </section>
}
export default ImageRightTextLeft