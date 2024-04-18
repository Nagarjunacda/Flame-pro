import { useRouter } from "next/router"
import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim"
import ProductsListing from "./ProductsListing"
import Breadcrumbs from "../BreadCrumbs"
import styles from './shopAll.module.css'

function ShopAll({ productsData, megaMenuData }) {
    const router = useRouter()
    const { query } = router;
    const { slug } = query;
    const trayData = { image: "https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/Firefighting-bannerimage.jpg", title: slug ? slug : 'Shop', speak_to_us_button: 'Speak To Us' }

    return <section className={styles.mainCont}>
        <HeaderBannerSlim trayData={trayData} />
        <section className={styles.breadCrumbs}><Breadcrumbs /></section>
        <ProductsListing productsData={productsData} megaMenuData={megaMenuData} />
    </section>
}
export default ShopAll