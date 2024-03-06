import Offcanvas from 'react-bootstrap/Offcanvas';
import FlameImage from '@/reusbleComponents/FlameImage';
import SearchMweb from '../SearchMweb';
import BasketMweb from '../BasketMweb';
import styles from '../header.module.css'

function OffCanvas({ show, handleClose, headerData }) {
    const flameLogo = '/Images/flameLogoDark.svg'
    const offCanvasClose = '/Images/offCanvasClose.svg'
    const navItems = headerData?.items
    const onlyNavItems = navItems?.slice(0, 5);
    const reorderedElem = navItems?.slice(5).reverse();
    const orderedNavItems = navItems && onlyNavItems.concat(reorderedElem);

    const getNavItem = (item) => {
        if (item?.title === 'Cart') {
            return <BasketMweb />
        }
        if (item?.title === 'Search') {
            return <SearchMweb />
        }
        return item?.title
    }

    return <Offcanvas show={show} className={styles.offCanvasCont} onHide={handleClose} placement={'end'}>
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
                return <nav key={index} className={styles.canvasTextItems}>{getNavItem(item)}</nav>
            })}
        </Offcanvas.Body>
    </Offcanvas>
}
export default OffCanvas