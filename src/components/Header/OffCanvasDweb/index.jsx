import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlameImage from '@/reusbleComponents/FlameImage';
import FireFighterppe from '@/components/ContentBlocks/FireFighterppe';
import HeaderDweb from '../HeaderDweb';
import styles from '../header.module.css'

function OffCanvasDweb({ show, handleClose, headerData }) {
    const [isOverlayCanvasOpen, setIsOverlayCanvasOpen] = useState(false)
    const flameLogo = '/Images/flameLogoDark.svg'
    const offCanvasClose = '/Images/offCanvasClose.svg'

    const handleOverlayClose = () => {
        setIsOverlayCanvasOpen(false)
    }

    return <Offcanvas show={show} className={styles.offCanvasCont} placement={'top'}>
        <Offcanvas.Header>
            <HeaderDweb headerData={headerData} isFromDrawer />
            {/* <Offcanvas.Title className={styles.offCanvasTitle}>
                <section className={styles.offCanvasHeading}>
                    <figure className={styles.headerLogo}>
                        <FlameImage src={flameLogo} alt='flameLogo' />
                    </figure>
                    <figure className={styles.offCanvasClose} onClick={handleClose}>
                        <FlameImage src={offCanvasClose} alt='closeBtn' />
                    </figure>
                </section>
            </Offcanvas.Title> */}
        </Offcanvas.Header>
        {/* <Offcanvas.Body className={styles.offCanvasBody}>
            {orderedNavItems?.map((item, index) => {
                return <nav onClick={() => { handleItemClick(item) }} key={index} className={styles.canvasTextItems}>{getNavItem(item)}</nav>
            })}
        </Offcanvas.Body> */}
        {/* <FireFighterppe selectedNavItem={selectedNavItem} handleOverlayClose={handleOverlayClose} /> */}
    </Offcanvas>
}
export default OffCanvasDweb