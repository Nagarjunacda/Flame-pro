import FlameImage from '@/reusbleComponents/FlameImage'
import FlameBtn from '@/reusbleComponents/FlameBtn'
import styles from './headerBanner.module.css'

function HeaderBanner() {
    const bannerImage = '/Images/headerBannerMweb.svg'
    const buttonColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'
    const buttonText = 'About Flame PRO'

    const handleButtonClick = () => { }

    return <section className={styles.main}>
        <figure className={styles.bannerImage}>
            <FlameImage src={bannerImage} alt='bannerImage' />
        </figure>
        <section className={styles.headerTextBlock}>
            <h1 className={styles.heading}>Heading Goes Here On One Or Two Lines</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <section className={styles.btnSection}>
                <FlameBtn color={buttonColor} textColor={textColor} text={buttonText} isLoadState={false} btnFunction={handleButtonClick} />
            </section>
        </section>
    </section>
}
export default HeaderBanner