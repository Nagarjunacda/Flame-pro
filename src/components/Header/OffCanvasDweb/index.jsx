import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlameImage from '@/reusbleComponents/FlameImage';
import FireFighterppe from '@/components/ContentBlocks/FireFighterppe';
import HeaderDweb from '../HeaderDweb';
import styles from '../header.module.css'

function OffCanvasDweb({ show, handleClose, headerData, selectedNavItem }) {
    const [isOverlayCanvasOpen, setIsOverlayCanvasOpen] = useState(false)

    const handleOverlayClose = () => {
        setIsOverlayCanvasOpen(false)
    }

    return <Offcanvas show={show} className={styles.offCanvasContDweb} placement={'top'}>
        <Offcanvas.Header>
            <HeaderDweb headerData={headerData} isCanvasOpen={show} isFromDrawer />
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offCanvasBody}>
            <FireFighterppe selectedNavItem={selectedNavItem} handleOverlayClose={handleOverlayClose} />
        </Offcanvas.Body>
    </Offcanvas>
}
export default OffCanvasDweb