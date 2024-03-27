import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlameImage from '@/reusbleComponents/FlameImage';
import FireFighterppe from '@/components/ContentBlocks/FireFighterppe';
import HeaderDweb from '../HeaderDweb';
import styles from '../header.module.css'

function OffCanvasDweb({ show, handleClose, headerData, selectedNavItem }) {
    const [clickedItem, setClickedItem] = useState({})
    const navItems = headerData?.items
    const flameLogo = '/Images/flameLogoDark.svg'
    const searchIcon = '/Images/searchIcon.svg'
    const basketIcon = '/Images/basketIcon.svg'
    const [isOverlayCanvasOpen, setIsOverlayCanvasOpen] = useState(false)

    const handleOverlayClose = () => {
        setIsOverlayCanvasOpen(false)
        handleClose()
    }

    useEffect(() => {
        setClickedItem(selectedNavItem)
    }, [selectedNavItem])

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

    const handleNavItemClick = (item) => {
        setClickedItem(item)
        // setIsCanvasOpen(true);
    }

    return <Offcanvas show={show} onHide={handleOverlayClose} className={styles.offCanvasContDweb} placement={'top'}>
        <Offcanvas.Header>
            <header className={styles.headerMainDweb}>
                <section className={styles.subHeader}>
                    <figure className={styles.headerLogo}>
                        <FlameImage src={flameLogo} alt='flameLogo' />
                    </figure>
                    <nav className={styles.navItemsDrawer}>
                        {navItems?.map((item, index) => {
                            return <nav className={item?.title === clickedItem?.title && styles.navItemBorder} key={index} onClick={() => { handleNavItemClick(item) }}>{getNavItem(item)}</nav>
                        })}
                    </nav>
                </section>
            </header>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offCanvasBody}>
            <FireFighterppe selectedNavItem={clickedItem} handleOverlayClose={handleOverlayClose} />
        </Offcanvas.Body>
    </Offcanvas>
}
export default OffCanvasDweb