import FlameBtn from "@/reusbleComponents/FlameBtn"
import styles from '../header.module.css'
import FlameImage from "@/reusbleComponents/FlameImage"

function HeaderMweb() {
    const flameLogo = 'Images/flameLogo.svg'
    return <section className={styles.headerMwebMain}>
        <section className={styles.headerLogo}>
            <FlameImage src={flameLogo} alt='flameLogo' />
        </section>
    </section>
}
export default HeaderMweb