import FlameImage from '@/reusbleComponents/FlameImage'
import styles from './twoAdBlockTest.module.css'

function TwoAdBlockTest({ trayData }) {
    const img1 = trayData?.image
    const img2 = trayData?.image_2
    return <section className={styles.mainCont}>
        <section className={styles.section1}>
            <FlameImage src={img1} alt='logo' />
        </section>
        <section className={styles.section2}>
            <FlameImage src={img2} alt='logo' />
        </section>
    </section>
}
export default TwoAdBlockTest