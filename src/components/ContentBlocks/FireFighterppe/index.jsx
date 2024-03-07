import FlameImage from '@/reusbleComponents/FlameImage'
import styles from './fireFighterppe.module.css'

function FireFighterppe({ handleOverlayClose }) {
    const backArrow = '/Images/backArrow.svg'
    return <section className={styles.container}>
        <section className={styles.heading}>
            <section className={styles.backButton} onClick={handleOverlayClose}>
                <section className={styles.backIcon}>
                    <FlameImage src={backArrow} alt='back' />
                </section>
                <p className={styles.backText}>Back</p>
            </section>
            <p className={styles.headingText}>Firefighting PPE</p>
        </section>
    </section>
}
export default FireFighterppe