import FlameImage from '@/reusbleComponents/FlameImage'
import styles from './fireFighterppe.module.css'
import BasketMweb from '@/components/Header/BasketMweb'
import SearchMweb from '@/components/Header/SearchMweb'
import BlogCard from '@/components/Cards/BlogCard'

function FireFighterppe({ selectedNavItem, handleOverlayClose }) {
    console.log(selectedNavItem, '!!')
    const heading = selectedNavItem?.title
    const childItems = selectedNavItem?.child_items
    const isFireFighting = selectedNavItem?.title === 'Firefighting PPE'
    const backArrow = '/Images/backArrow.svg'

    return <section className={styles.container}>
        <section className={styles.heading}>
            <section className={styles.backButton} onClick={handleOverlayClose}>
                <section className={styles.backIcon}>
                    <FlameImage src={backArrow} alt='back' />
                </section>
                <p className={styles.backText}>Back</p>
            </section>
            <p className={styles.headingText}>{heading}</p>
        </section>
        <section className={styles.subContainer}>
            <section className={styles.childHeading}>
                {childItems.map((childItem, index) => {
                    return <section key={index}>{childItem?.title}</section>
                })}
            </section>
            {!isFireFighting && <BasketMweb />}
            {!isFireFighting && <SearchMweb />}
            <section className={styles.blogCard}>
                <BlogCard />
            </section>
        </section>
    </section>
}
export default FireFighterppe