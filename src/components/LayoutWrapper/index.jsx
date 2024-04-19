import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { headerMenuUrl, footerMenuUrl } from "@/utils/urls"
import { HeaderDataProvider } from "@/context/headerContext"
import { handleServerSideProps } from "@/utils/handleServerSideData"
import { CartDataProvider } from "@/context/CartContext"
import { ProductCatDataProvider } from "@/context/ProductCatContext"
import { NonceProvider } from "@/context/NonceContext"
import { relativeHeaderPaths } from "@/utils/constants"
import Header from "../Header"
import Footer from "../Footer"
import Styles from './wrapper.module.css'

function LayoutWrapper({ children }) {
  const router = useRouter()
  const { route, query } = router
  const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots', 'full-solutions', 'consumables', 'flash-hoods'];
  const [headerData, setHeaderData] = useState({});
  const [footerData, setfooterData] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const relativeHeader = relativeHeaderPaths.includes(route) && !arr.includes(query.slug);

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
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await handleServerSideProps(footerMenuUrl);
      if (data) {
        setfooterData(data)
      }
    }
    getData()
  }, [])

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
            </main>
          </HeaderDataProvider>
        </ProductCatDataProvider>
      </CartDataProvider>
    </NonceProvider>
  )
}
export default LayoutWrapper