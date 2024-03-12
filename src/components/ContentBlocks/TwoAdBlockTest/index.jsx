import FlameImage from '@/reusbleComponents/FlameImage'
import styles from './twoAdBlockTest.module.css'

function TwoAdBlockTest({ trayData }) {
    const img1 = '/Images/block1.jpg'
    const img2 = '/Images/block2.jpg'
    return <section className={styles.mainCont}>
        <section className={styles.section1}>
            <section className={styles.innerSection1}>
                <FlameImage src={img1} alt='logo' />
                <section className={styles.overlay}></section>
            </section>
        </section>
        <section className={styles.section2}>
            <section className={styles.innerSection2}>
                <FlameImage src={img2} alt='logo' />
                <section className={styles.overlay}></section>
            </section>
        </section>
    </section>
}
export default TwoAdBlockTest