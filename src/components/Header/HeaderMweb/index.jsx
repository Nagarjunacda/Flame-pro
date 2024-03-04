import { useState } from "react"
import FlameImage from "@/reusbleComponents/FlameImage"
import OffCanvas from "../OffCanvas"
import styles from '../header.module.css'

function HeaderMweb() {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false)
    const flameLogo = 'Images/flameLogo.svg'
    const hamburgerIcon = 'Images/hamburger.svg'

    const handleOffCanvas = () => {
        setIsCanvasOpen(true)
    }

    const handleClose = () => {
        setIsCanvasOpen(false)
    }

    return <section className={styles.headerMwebMain}>
        <figure className={styles.headerLogo}>
            <FlameImage src={flameLogo} alt='flameLogo' />
        </figure>
        <figure className={styles.hamburger} onClick={handleOffCanvas}>
            <FlameImage src={hamburgerIcon} alt='hamburger' />
        </figure>
        <OffCanvas show={isCanvasOpen} handleClose={handleClose} />
    </section>
}
export default HeaderMweb