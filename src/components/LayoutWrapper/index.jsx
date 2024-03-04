import Header from "../Header"
import Footer from "../Footer"
import Styles from './wrapper.module.css'

function LayoutWrapper({ children }) {
  return (
    <main className={Styles.main}>
      <section className={Styles.header}>
        <Header />
      </section>
      {children}
      <Footer />
    </main>
  )
}
export default LayoutWrapper