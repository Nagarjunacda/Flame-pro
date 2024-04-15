import { useState } from "react"
import Link from "next/link"
import FlameImage from "@/reusbleComponents/FlameImage"
import OffCanvas from "../OffCanvas"
import styles from '../header.module.css'

function HeaderMweb({ headerData, relativeHeader, scrolled }) {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false)
    const flameLogo = scrolled ? '/Images/flameLogo.svg' : relativeHeader ? '/Images/flameLogoDark.svg' : '/Images/flameLogo.svg'
    const hamburgerIcon = scrolled ? 'Images/hamburger.svg' : relativeHeader ? '/Images/hamburgerDark.svg' : 'Images/hamburger.svg'

    const handleOffCanvas = () => {
        setIsCanvasOpen(true)
    }

    const handleClose = () => {
        setIsCanvasOpen(false)
    }

    return <section className={scrolled ? styles.scrolledHeaderMain : relativeHeader ? styles.relativeHeaderMain : styles.headerMain}>
        <figure className={styles.headerLogo}>
            <Link href='/'>
                <FlameImage src={flameLogo} alt='flameLogo' />
            </Link>
        </figure>
        <figure className={styles.hamburger} onClick={handleOffCanvas}>
            <FlameImage src={hamburgerIcon} alt='hamburger' />
        </figure>
        <OffCanvas show={isCanvasOpen} handleClose={handleClose} headerData={headerData} />
    </section>
}
export default HeaderMweb