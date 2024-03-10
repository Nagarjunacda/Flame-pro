import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlameImage from '@/reusbleComponents/FlameImage';
import SearchMweb from '../SearchMweb';
import BasketMweb from '../BasketMweb';
import FireFighterppe from '@/components/ContentBlocks/FireFighterppe';
import DefenceProcurement from '@/components/ContentBlocks/DefenceProcurement';
import ResoureceHub from '@/components/ContentBlocks/ResourceHub';
import styles from '../header.module.css'

function OffCanvas({ show, handleClose, headerData }) {
    const [isOverlayCanvasOpen, setIsOverlayCanvasOpen] = useState(false)
    const [selectedNavItem, setSelectedNavItem] = useState(false)
    const flameLogo = '/Images/flameLogoDark.svg'
    const offCanvasClose = '/Images/offCanvasClose.svg'
    const navItems = headerData?.items
    const onlyNavItems = navItems?.slice(0, 5);
    const reorderedElem = navItems?.slice(5).reverse();
    const orderedNavItems = navItems && onlyNavItems.concat(reorderedElem);
    const overlayArr = ['Firefighting PPE', 'Defence Procurement', 'Resource Hub']

    const handleOffCanvas = () => {
        setIsOverlayCanvasOpen(true)
    }

    const handleOverlayClose = () => {
        setIsOverlayCanvasOpen(false)
    }

    const getNavItem = (item) => {
        if (item?.title === 'Cart') {
            return <BasketMweb />
        }
        if (item?.title === 'Search') {
            return <SearchMweb />
        }
        return item?.title
    }

    const handleItemClick = (item) => {
        setSelectedNavItem(item)
        if (overlayArr.includes(item?.title)) {
            handleOffCanvas()
            return
        }
    }

    const getComp = () => {
        switch (selectedNavItem?.title) {
            case 'Firefighting PPE':
                return <FireFighterppe selectedNavItem={selectedNavItem} handleOverlayClose={handleOverlayClose} />
            case 'Defence Procurement':
                return <DefenceProcurement handleOverlayClose={handleOverlayClose} />
            case 'Resource Hub':
                return <ResoureceHub handleOverlayClose={handleOverlayClose} />
            default:
                return null
        }
    }

    return <>
        <Offcanvas show={show} className={styles.offCanvasCont} placement={'end'}>
            <Offcanvas.Header>
                <Offcanvas.Title className={styles.offCanvasTitle}>
                    <section className={styles.offCanvasHeading}>
                        <figure className={styles.headerLogo}>
                            <FlameImage src={flameLogo} alt='flameLogo' />
                        </figure>
                        <figure className={styles.offCanvasClose} onClick={handleClose}>
                            <FlameImage src={offCanvasClose} alt='closeBtn' />
                        </figure>
                    </section>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offCanvasBody}>
                {orderedNavItems?.map((item, index) => {
                    return <nav onClick={() => { handleItemClick(item) }} key={index} className={styles.canvasTextItems}>{getNavItem(item)}</nav>
                })}
            </Offcanvas.Body>
        </Offcanvas>
        <Offcanvas show={isOverlayCanvasOpen} className={styles.offCanvasCont} onHide={handleOverlayClose} placement={'end'}>
            <Offcanvas.Header>
                <Offcanvas.Title className={styles.offCanvasTitle}>
                    <section className={styles.offCanvasHeading}>
                        <figure className={styles.headerLogo}>
                            <FlameImage src={flameLogo} alt='flameLogo' />
                        </figure>
                        <figure className={styles.offCanvasClose} onClick={handleOverlayClose}>
                            <FlameImage src={offCanvasClose} alt='closeBtn' />
                        </figure>
                    </section>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offCanvasBody}>
                <FireFighterppe selectedNavItem={selectedNavItem} handleOverlayClose={handleOverlayClose} />
            </Offcanvas.Body>
        </Offcanvas>
    </>
}
export default OffCanvas