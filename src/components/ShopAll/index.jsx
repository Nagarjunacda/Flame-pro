import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim"
import ProductsListing from "./ProductsListing"
import styles from './shopAll.module.css'

function ShopAll({ productsData }) {
    const trayData = { image: "https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/Firefighting-bannerimage.jpg", title: 'Full Suits', speak_to_us_button: 'Speak To Us' }

    return <section className={styles.mainCont}>
        <HeaderBannerSlim trayData={trayData} />
        <ProductsListing productsData={productsData} />
    </section>
}
export default ShopAll