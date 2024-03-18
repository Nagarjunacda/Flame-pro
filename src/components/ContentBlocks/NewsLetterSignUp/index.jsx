import FlameImage from '@/reusbleComponents/FlameImage'
import SignUpForm from '@/components/SignUpForm'
import styles from './newsLetterSignUp.module.css'

function NewsLetterSignUp({ trayData }) {
    const imgSrc = trayData?.image
    const text = trayData?.text
    return <section className={styles.mainCont}>
        <section className={styles.imageStyles}>
            <FlameImage src={imgSrc} alt='image' />
        </section>
        <section className={styles.overlay}></section>
        <section className={styles.form}>
            <SignUpForm isFromFooter={false} text={text} />
        </section>
    </section>
}
export default NewsLetterSignUp