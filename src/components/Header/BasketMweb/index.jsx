import FlameImage from "@/reusbleComponents/FlameImage"
import styles from '../header.module.css'

function BasketMweb() {
    const basketIcon = '/Images/basketIcon.svg'
    return <section className={styles.basketMwebMain}>
        <section className={styles.searchIcon}>
            <FlameImage src={basketIcon} alt='searchIcon' />
        </section>
        <section className={styles.searchText}>Quote Basket</section>
    </section>
}
export default BasketMweb