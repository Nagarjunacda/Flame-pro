import FlameImage from '@/reusbleComponents/FlameImage'
import styles from './headerBanner.module.css'

function HeaderBanner() {
    const bannerImage = '/Images/headerBannerMweb.svg'
    return <section className={styles.main}>
        <figure className={styles.bannerImage}>
            <FlameImage src={bannerImage} alt='bannerImage' />
        </figure>
    </section>
}
export default HeaderBanner