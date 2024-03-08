import { useState } from 'react'
import FlameImage from '@/reusbleComponents/FlameImage'
import OffCanvasDweb from '../OffCanvasDweb'
import styles from '../header.module.css'

function HeaderDweb({ headerData, isFromDrawer }) {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false)
    const navItems = headerData?.items
    const flameLogo = isFromDrawer ? '/Images/flameLogoDark.svg' : '/Images/flameLogo.svg'
    const searchIcon = isFromDrawer ? '/Images/searchIcon.svg' : '/Images/searchIconWhite.svg'
    const basketIcon = isFromDrawer ? '/Images/basketIcon.svg' : '/Images/basketIconWhite.svg'

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

    const handleNavItemClick = () => {
        setIsCanvasOpen(true)
    }

    const handleClose = () => {
        setIsCanvasOpen(false)
    }

    return <header className={styles.headerMainDweb}>
        <section className={styles.subHeader}>
            <figure className={styles.headerLogo}>
                <FlameImage src={flameLogo} alt='flameLogo' />
            </figure>
            <nav className={isFromDrawer ? styles.navItemsDrawer : styles.navItems}>
                {navItems?.map((item, index) => {
                    return <nav key={index} onClick={() => { handleNavItemClick(item) }}>{getNavItem(item)}</nav>
                })}
            </nav>
        </section>
        <OffCanvasDweb show={isCanvasOpen} handleClose={handleClose} headerData={headerData} />
    </header>
}
export default HeaderDweb