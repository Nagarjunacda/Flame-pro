import Link from 'next/link';
import FlameImage from '@/reusbleComponents/FlameImage'
import SignUpForm from '@/components/SignUpForm'
import FlameBtn from '@/reusbleComponents/FlameBtn'
import { renderHTML } from '@/utils/htmlString'
import styles from './contactFormBlock.module.css'

function ContactFormBlock({ trayData }) {
    const imgSrc = trayData?.image || ''
    const text = trayData?.text
    const title = trayData?.title
    const btnColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'
    const btnText = trayData?.button_title
    const formHeading = 'Enter Your Details'
    const formData = [{ section1: 'Full Name*', section2: 'Email Address*' }, { section1: 'Phone Number*', section2: 'Company Name*' }, { section1: 'Job Title*' }, { section1: 'Message' }];
    const buttonLink = trayData?.button_link;

    const btnFunction = () => { }

    return <section className={styles.mainCont}>
        <section className={styles.formSection}>
            <SignUpForm isFromFooter={false} text={text} heading={formHeading} formFields={formData} />
        </section>
        <section className={styles.imageSection}>
            <section className={styles.img}>
                <FlameImage src={imgSrc} alt='image' />
            </section>
            <section className={styles.overlay} />
            <section className={styles.textBlock}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{renderHTML(text)}</p>
                <Link href={buttonLink}>
                    <FlameBtn color={btnColor} text={btnText} textColor={textColor} isLoadState={false} btnFunction={btnFunction} />
                </Link>
            </section>
        </section>
    </section>
}
export default ContactFormBlock