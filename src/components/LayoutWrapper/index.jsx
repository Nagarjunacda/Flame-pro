import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { headerMenuUrl } from "@/utils/urls"
import { handleServerSideProps } from "@/utils/handleServerSideData"
import { CartDataProvider } from "@/context/CartContext"
import { NonceProvider } from "@/context/NonceContext"
import { relativeHeaderPaths } from "@/utils/constants"
import Header from "../Header"
import Footer from "../Footer"
import Styles from './wrapper.module.css'

function LayoutWrapper({ children }) {
  const router = useRouter()
  const { asPath } = router
  const [headerData, setHeaderData] = useState({})
  const relativeHeader = relativeHeaderPaths.includes(asPath)

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await handleServerSideProps(headerMenuUrl);
      if (data) {
        setHeaderData(data)
      }
    }
    getData()
  }, [])

  return (
    <NonceProvider>
      <CartDataProvider>
        <main className={Styles.main}>
          <section className={relativeHeader ? Styles.relativeHeader : Styles.header}>
            <Header headerData={headerData} relativeHeader={relativeHeader} />
          </section>
          {children}
          <Footer />
        </main>
      </CartDataProvider>
    </NonceProvider>
  )
}
export default LayoutWrapper