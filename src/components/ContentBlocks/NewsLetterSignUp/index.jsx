import FlameImage from '@/reusbleComponents/FlameImage'
import SignUpForm from '@/components/SignUpForm'
import styles from './newsLetterSignUp.module.css'

function NewsLetterSignUp({ trayData }) {
    const imgSrc = trayData?.image
    const text = trayData?.text
    const formHeading = 'Sign Up To Our Mailing'

    return <section className={styles.mainCont}>
        <section className={styles.imageStyles}>
            <FlameImage src={imgSrc} alt='image' />
        </section>
        <section className={styles.overlay}></section>
        <section className={styles.form}>
            <SignUpForm isFromFooter={false} text={text} heading={formHeading} />
        </section>
    </section>
}
export default NewsLetterSignUp