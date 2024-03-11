import FlameImage from '@/reusbleComponents/FlameImage'
import SignUpForm from '@/components/SignUpForm'
import styles from './newsLetterSignUp.module.css'

function NewsLetterSignUp({ trayData }) {
    console.log(trayData, '!!')
    const imgSrc = trayData?.image
    return <section className={styles.mainCont}>
        <section className={styles.imageStyles}>
            <FlameImage src={imgSrc} alt='image' />
        </section>
        <section className={styles.overlay}></section>
        <section className={styles.form}>
            <SignUpForm />
        </section>
    </section>
}
export default NewsLetterSignUp