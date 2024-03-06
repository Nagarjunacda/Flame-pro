import FlameImage from '@/reusbleComponents/FlameImage'
import styles from '../header.module.css'

function SearchMweb() {
    const searchIcon = '/Images/searchIcon.svg'
    return <section className={styles.searchMwebMain}>
        <section className={styles.searchText}>Search</section>
        <section className={styles.searchIcon}>
            <FlameImage src={searchIcon} alt='searchIcon' />
        </section>
    </section>
}
export default SearchMweb