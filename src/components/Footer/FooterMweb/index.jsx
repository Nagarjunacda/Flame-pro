import { useState } from 'react';
import { useRouter } from 'next/router';
import FlameImage from '@/reusbleComponents/FlameImage';
import CopyRightText from '../CopyRightText';
import SignUpForm from '@/components/SignUpForm';
import styles from '../footer.module.css';

function FooterMweb({ footerData }) {
    const router = useRouter()
    const footerLogo = '/Images/footerLogo.svg';
    const [clickedLink, setClickedLink] = useState('')
    const [linkData, setLinkData] = useState([])
    const [accor, setAccor] = useState(false)
    const plusIcon = '/Images/plusIcon.svg'
    const formHeading = 'Sign Up To Our Mailing'
    const data1 = footerData ? footerData?.items?.map((e) => {
        return e?.title
    }) : []

    const handleLabelClick = (label, link) => {
        if (link === 'Contact') {
            return
        }
        if (label === 'About Flame Pro') {
            router.push('/about')
            return
        }
        router.push('/terms-conditions')
    }

    const usefulLinksArr = footerData?.items?.filter(e => e?.title === 'Useful Links');
    const usefulLinks = usefulLinksArr && usefulLinksArr[0]?.child_items.map(e => e?.title);
    const legalArr = footerData?.items?.filter(e => e?.title === 'Legal');
    const Legal = legalArr && legalArr[0]?.child_items.map(e => e?.title);
    const contactArr = footerData?.items?.filter(e => e?.title === 'Contact');
    const contact = contactArr && contactArr[0]?.child_items.map(e => e?.title);

    // const usefulLinks = [
    //     'Distributors',
    //     'About Flame Pro',
    //     'FAQs',
    // ]
    // const Legal = [
    //     'Terms & Conditions',
    //     'Privacy Policy',
    //     'Cookies',
    // ]
    // const contact = [
    //     'FlamePro Global Ltd Unit 2, Dianthus Business Park, Common Lane, Newport,Brough, East Yorkshire,HU15 2FT',
    //     'info@flame-pro.com',
    //     '+44 (0)1332 325783'
    // ]
    const formData = [{ section1: 'Full Name*' }, { section1: 'Email Address*' }, { section1: 'Area Of Interest*' }]

    const handleAcor = (link) => {
        setAccor(true)
        switch (link) {
            case 'Useful Links':
                setClickedLink(link)
                setLinkData(usefulLinks)
                break
            case 'Legal':
                setClickedLink(link)
                setLinkData(Legal)
                break
            case 'Contact':
                setClickedLink(link)
                setLinkData(contact)
                break
            default:
                return ''
        }
    }

    const handleClose = (link) => {
        setAccor(false)
    }

    return <section className={styles.mwebCont}>
        <section className={styles.footerLogo}>
            <FlameImage src={footerLogo} alt='logo' />
        </section>
        <section className={styles.linksCont}>
            {data1 && data1.map((link, index) => {
                return (
                    <section key={index} className={styles.linksInnerCont}>
                        <section
                            className={styles.linkBlock}
                            key={index}
                        >
                            <section>{link}</section>
                            {accor && link === clickedLink ? (
                                <div onClick={handleClose}>
                                    -
                                </div>
                            ) : (
                                <section onClick={() => handleAcor(link)} className={styles.icon}>
                                    <FlameImage src={plusIcon} alt='icon' />
                                </section>
                            )}
                        </section>
                        {accor && link === clickedLink && (
                            <section className={styles.listCont}>
                                {linkData.map((e, index) => (
                                    <section onClick={() => { handleLabelClick(e, link) }} key={index} className={styles.listItem}>
                                        {e}
                                    </section>
                                ))}
                            </section>
                        )}
                    </section>
                )
            })}
        </section>
        <SignUpForm isFromFooter heading={formHeading} formFields={formData} />
        <section className={styles.copyRightCont}><CopyRightText /></section>
    </section>
}
export default FooterMweb