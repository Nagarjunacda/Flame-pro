import Offcanvas from 'react-bootstrap/Offcanvas';
import FlameImage from '@/reusbleComponents/FlameImage';
import styles from '../header.module.css'

function OffCanvas({ show, handleClose }) {
    const flameLogo = '/Images/flameLogoDark.svg'
    const offCanvasClose = '/Images/offCanvasClose.svg'

    return <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header>
            <Offcanvas.Title className={styles.offCanvasTitle}>
                <section className={styles.offCanvasHeading}>
                    <figure className={styles.headerLogo}>
                        <FlameImage src={flameLogo} alt='flameLogo' />
                    </figure>
                    <figure className={styles.offCanvasClose} onClick={handleClose}>
                        <FlameImage src={offCanvasClose} alt='flameLogo' />
                    </figure>
                </section>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
    </Offcanvas>
}
export default OffCanvas