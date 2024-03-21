import FlameImage from '@/reusbleComponents/FlameImage'
import styles from './twoAdBlockTest.module.css'
import Link from 'next/link'

function TwoAdBlockTest({ trayData }) {
    const img1 = '/Images/block1.jpg'
    const img2 = '/Images/block2.jpg'
    const fireLogo = '/Images/fireLogo.svg'
    const defenceLogo = 'Images/defenceLogo.svg'

    return <section className={styles.mainCont}>
        <section className={styles.section1}>
            <Link href={'/firefighting-ppe'}>
                <section className={styles.innerSection1}>
                    <FlameImage src={img1} alt='logo' />
                    <section className={styles.overlay}></section>
                </section>
                <section className={styles.logoAndText}>
                    <FlameImage src={fireLogo} alt='logo' />
                    <section className={styles.overlayText}><p>Discover Firefighting PPE</p></section>
                </section>
            </Link>
        </section>
        <section className={styles.section2}>
            <Link href={'/defence-procurement'}>
                <section className={styles.innerSection2}>
                    <FlameImage src={img2} alt='logo' />
                    <section className={styles.overlay}></section>
                </section>
                <section className={styles.logoAndText}>
                    <FlameImage src={defenceLogo} alt='logo' />
                    <section className={styles.overlayText}><p>Discover Defence Procurement</p></section>
                </section>
            </Link>
        </section>
    </section>
}
export default TwoAdBlockTest