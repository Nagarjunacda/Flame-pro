import { useState } from "react"
import FlameImage from "@/reusbleComponents/FlameImage"
import OffCanvas from "../OffCanvas"
import styles from '../header.module.css'

function HeaderMweb({ headerData, relativeHeader }) {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false)
    const flameLogo = relativeHeader ? '/Images/flameLogoDark.svg' : '/Images/flameLogo.svg'
    const hamburgerIcon = relativeHeader ? '/Images/hamburgerDark.svg' : 'Images/hamburger.svg'

    const handleOffCanvas = () => {
        setIsCanvasOpen(true)
    }

    const handleClose = () => {
        setIsCanvasOpen(false)
    }

    return <section className={relativeHeader ? styles.relativeHeaderMain : styles.headerMain}>
        <figure className={styles.headerLogo}>
            <FlameImage src={flameLogo} alt='flameLogo' />
        </figure>
        <figure className={styles.hamburger} onClick={handleOffCanvas}>
            <FlameImage src={hamburgerIcon} alt='hamburger' />
        </figure>
        <OffCanvas show={isCanvasOpen} handleClose={handleClose} headerData={headerData} />
    </section>
}
export default HeaderMweb