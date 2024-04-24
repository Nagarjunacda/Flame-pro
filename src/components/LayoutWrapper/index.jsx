import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import { Scrollbar } from 'smooth-scrollbar-react';
import { headerMenuUrl, footerMenuUrl } from "@/utils/urls";
import { useFooterContextData } from "@/context/FooterDataContext";
import { useSpeakToPopupState } from "@/context/SpeakToPopupContext";
import { HeaderDataProvider } from "@/context/headerContext";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { CartDataProvider } from "@/context/CartContext";
import { ProductCatDataProvider } from "@/context/ProductCatContext";
import { NonceProvider } from "@/context/NonceContext";
import { relativeHeaderPaths } from "@/utils/constants";
import ContactUsPageForm from "../ContactUsPageForm";
import Header from "../Header";
import Footer from "../Footer";
import Styles from './wrapper.module.css';

function LayoutWrapper({ children }) {
  const router = useRouter()
  const { route, query } = router
  const { isSpeakPopupOpen, setIsSpeakPopupOpen } = useSpeakToPopupState();
  const { footerContextData } = useFooterContextData();
  const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots', 'full-solutions', 'consumables', 'flash-hoods'];
  const [headerData, setHeaderData] = useState({});
  const [footerData, setfooterData] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const relativeHeader = relativeHeaderPaths.includes(route) && !arr.includes(query.slug);
  const isProductDetailPage = route === "/shop/[slug]" && !arr.includes(query.slug);
  const contactEmail = footerContextData?.acf?.contact_email;
  const phone = footerContextData?.acf?.phone_no;
  const socialIcons = footerContextData?.acf?.social_icon_and_link;

  const formData = [
    { section1: "Full Name*" },
    { section1: "Email Address*" },
    { section1: "Phone Number*" },
    { section1: "Company Name*" },
    { section1: "Job Title*" },
    { section1: "Message*" },
  ];

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await handleServerSideProps(headerMenuUrl);
      if (data) {
        setHeaderData(data)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = isProductDetailPage ? window.scrollY > 650 : window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isProductDetailPage]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await handleServerSideProps(footerMenuUrl);
      if (data) {
        setfooterData(data)
      }
    }
    getData()
  }, [])

  const closePopup = () => {
    setIsSpeakPopupOpen(false);
  }

  return (
    <NonceProvider>
      <CartDataProvider>
        <ProductCatDataProvider>
          <HeaderDataProvider>
            <main className={Styles.main}>
              <section className={scrolled ? Styles.stickyHeader : relativeHeader ? Styles.relativeHeader : Styles.header}>
                <Header scrolled={scrolled} headerData={headerData} relativeHeader={relativeHeader} />
              </section>
              {children}
              <Footer footerData={footerData} />
              {isSpeakPopupOpen && (
                <div className={Styles.popupBackground} onClick={closePopup}>
                  <Scrollbar
                    alwaysShowTracks
                    damping={0.1}
                    plugins={{
                      overscroll: {
                        effect: 'bounce',
                      },
                    }}>
                    <div className={Styles.popupContent} onClick={(e) => e.stopPropagation()}>
                      <section className={Styles.popupCont}>
                        <h3 className={Styles.headingText}>Speak To</h3>
                        <p className={Styles.popupText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <ContactUsPageForm
                          isFromPopup
                          heading={"Enter Your Details"}
                          formFields={formData}
                          heading2={"Contact Me By..."}
                        />
                        <section className={Styles.infoBlock}>
                          <h5 className={Styles.helpText}>Or Call Us Now To Discuss How We Can Help…</h5>
                          <section className={Styles.contactBlock}>
                            <a href={`mailto:${contactEmail}`}>
                              <h5 className={Styles.contactInfo}>{contactEmail}</h5>
                            </a>
                            <a href={`tel:${phone}`} >
                              <h5 className={Styles.contactInfo}>{phone}</h5>
                            </a>
                            <div className={Styles.socialItems}>
                              {socialIcons?.map((e) => {
                                return <Link
                                  href={e?.link}
                                  target="blank"
                                  className={Styles.socialItem}
                                >
                                  <FlameImage src={e?.image} />
                                </Link>
                              })}
                            </div>
                          </section>
                        </section>
                      </section>
                    </div>
                  </Scrollbar>
                </div>
              )}
            </main>
          </HeaderDataProvider>
        </ProductCatDataProvider>
      </CartDataProvider>
    </NonceProvider >
  )
}
export default LayoutWrapper