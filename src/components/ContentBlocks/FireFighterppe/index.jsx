import FlameImage from '@/reusbleComponents/FlameImage'
import BasketMweb from '@/components/Header/BasketMweb'
import SearchMweb from '@/components/Header/SearchMweb'
import BlogCard from '@/components/Cards/BlogCard'
import { useMediaQuery } from 'react-responsive'
import styles from './fireFighterppe.module.css'

function FireFighterppe({ selectedNavItem, handleOverlayClose }) {
    const heading = selectedNavItem?.title
    const childItems = selectedNavItem?.child_items
    const isFireFighting = selectedNavItem?.title === 'Firefighting PPE'
    const backArrow = '/Images/backArrow.svg'
    const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
    const isLargeScreen = useMediaQuery({ query: '(min-width:1280px)' })
    const fireFightingCards = isLargeScreen ? ['item', 'item'] : ['item']
    const nonFireFightingCards = isDesktop ? ['item', 'item', 'item'] : ['item']
    const blogCardArr = isFireFighting ? fireFightingCards : nonFireFightingCards

    return <section className={styles.container}>
        {!isDesktop && <section className={styles.heading}>
            <section className={styles.backButton} onClick={handleOverlayClose}>
                <section className={styles.backIcon}>
                    <FlameImage src={backArrow} alt='back' />
                </section>
                <p className={styles.backText}>Back</p>
            </section>
            <p className={styles.headingText}>{heading}</p>
        </section>}
        <section className={styles.subContainer}>
            <section className={isFireFighting ? styles.childHeadingPpe : styles.childHeading}>
                {childItems && childItems.map((item, index) => {
                    return <section className={styles.childCont}><section key={index}>{item?.title}</section>
                        {item.child_items && item.child_items.map((childItem, index) => {
                            return <section className={styles.innerChild}>
                                <section key={index}>{childItem?.title}</section>
                            </section>
                        })}</section>
                })}
            </section>
            {!isFireFighting && !isDesktop && <BasketMweb />}
            {!isFireFighting && !isDesktop && <SearchMweb />}
            <section className={styles.blogCard}>
                {blogCardArr.map((e, index) => {
                    return <BlogCard key={index} />
                })}
            </section>
        </section>
    </section>
}
export default FireFighterppe