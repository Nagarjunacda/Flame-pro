import { useRouter } from 'next/router'
import FlameImage from '@/reusbleComponents/FlameImage'
import FlameBtn from '@/reusbleComponents/FlameBtn'
import styles from './headerBannerSlim.module.css'

function HeaderBannerSlim({ trayData }) {
    const router = useRouter()
    const bannerImage = trayData?.image
    const buttonColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'
    const buttonText = trayData?.speak_to_us_button
    const text = trayData?.text
    const title = trayData?.title

    const handleButtonClick = () => {
        router.push('/about')
    }

    return <section className={styles.main}>
        <figure className={styles.bannerImage} onClick={handleButtonClick}>
            <FlameImage src={bannerImage} alt='bannerImage' />
        </figure>
        <section className={styles.headerTextBlock}>
            <h1 className={styles.heading}>{title}</h1>
            <section className={styles.btnSection}>
                <FlameBtn color={buttonColor} textColor={textColor} text={buttonText} isLoadState={false} btnFunction={handleButtonClick} />
            </section>
        </section>
        <section className={styles.overlay}></section>
    </section>
}
export default HeaderBannerSlim