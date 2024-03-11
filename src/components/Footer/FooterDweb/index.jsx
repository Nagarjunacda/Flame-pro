import FlameImage from '@/reusbleComponents/FlameImage'
import SignUpForm from '@/components/SignUpForm'
import CopyRightText from '../CopyRightText'
import styles from '../footer.module.css'


function FooterDweb() {
    const flameImg = '/Images/flameLogo.svg'
    const data1 = ['Useful Links', 'Legal', 'Contact']
    const usefulLinks = [
        'Distributors',
        'About Flame Pro',
        'FAQs',
    ]
    const Legal = [
        'Terms & Conditions',
        'Privacy Policy',
        'Cookies',
    ]
    const contact = [
        'FlamePro Global Ltd Unit 2, Dianthus Business Park, Common Lane, Newport,Brough, East Yorkshire,HU15 2FT',
        'info@flame-pro.com',
        '+44 (0)1332 325783'
    ]
    return <section className={styles.dwebCont}>
        <section className={styles.dataContDweb}>
            <section className={styles.flameImg}>
                <FlameImage src={flameImg} alt='logo' />
            </section>
            <section className={styles.linkListCont}>
                {data1.map((link, index) => {
                    return <section key={index} className={styles.navLinks}>
                        <p>{link}</p>
                        {link === 'Useful Links' &&
                            usefulLinks.map((e, index) => {
                                return <section className={styles.innerLinks} key={index}>{e}</section>
                            })}
                        {link === 'Legal' &&
                            Legal.map((e, index) => {
                                return <section className={styles.innerLinks} key={index}>{e}</section>
                            })}
                        {link === 'Contact' &&
                            contact.map((e, index) => {
                                return <section className={styles.address} key={index}>{e}</section>
                            })}
                    </section>
                })}
            </section>
            <SignUpForm isFromFooter />
        </section>
        <section className={styles.copyRight}>
            <CopyRightText />
        </section>
    </section>
}
export default FooterDweb