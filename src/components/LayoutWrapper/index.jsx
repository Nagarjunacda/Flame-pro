import { useEffect, useState } from "react"
import { headerMenuUrl } from "@/utils/urls"
import { handleServerSideProps } from "@/utils/handleServerSideData"
import Header from "../Header"
import Footer from "../Footer"
import Styles from './wrapper.module.css'

function LayoutWrapper({ children }) {
  const [headerData, setHeaderData] = useState({})

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
    <main className={Styles.main}>
      <section className={Styles.header}>
        <Header headerData={headerData} />
      </section>
      {children}
      <Footer />
    </main>
  )
}
export default LayoutWrapper