import FlameImage from '@/reusbleComponents/FlameImage'
import styles from '../header.module.css'

function HeaderDweb({ headerData }) {
    const navItems = headerData?.items
    const flameLogo = '/Images/flameLogo.svg'
    const searchIcon = '/Images/searchIconWhite.svg'
    const basketIcon = '/Images/basketIconWhite.svg'

    const getNavItem = (item) => {
        if (item?.title === 'Cart') {
            return <section className={styles.searchIcon}>
                <FlameImage src={basketIcon} alt='basketIcon' />
            </section>
        }
        if (item?.title === 'Search') {
            return <section className={styles.searchIcon}>
                <FlameImage src={searchIcon} alt='searchIcon' />
            </section>
        }
        return item?.title
    }

    return <header className={styles.headerMain}>
        <section className={styles.subHeader}>
            <figure className={styles.headerLogo}>
                <FlameImage src={flameLogo} alt='flameLogo' />
            </figure>
            <nav className={styles.navItems}>
                {navItems?.map((item, index) => {
                    return <nav key={index}>{getNavItem(item)}</nav>
                })}
            </nav>
        </section>
    </header>
}
export default HeaderDweb