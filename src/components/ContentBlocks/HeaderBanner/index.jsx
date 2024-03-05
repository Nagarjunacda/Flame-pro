import FlameImage from '@/reusbleComponents/FlameImage'
import FlameBtn from '@/reusbleComponents/FlameBtn'
import { renderHTML } from '@/utils/htmlString'
import styles from './headerBanner.module.css'

function HeaderBanner({ trayData }) {
    const bannerImage = trayData?.image
    const buttonColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'
    const buttonText = trayData?.button_title
    const text = trayData?.text
    const title = trayData?.title

    const handleButtonClick = () => { }

    return <section className={styles.main}>
        <figure className={styles.bannerImage}>
            <FlameImage src={bannerImage} alt='bannerImage' />
        </figure>
        <section className={styles.headerTextBlock}>
            <h1 className={styles.heading}>{title}</h1>
            <section className={styles.textSection}>
                <section className={styles.text}>{renderHTML(text)}</section>
            </section>
            <section className={styles.btnSection}>
                <FlameBtn color={buttonColor} textColor={textColor} text={buttonText} isLoadState={false} btnFunction={handleButtonClick} />
            </section>
        </section>
    </section>
}
export default HeaderBanner