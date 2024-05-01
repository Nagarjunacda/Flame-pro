import { useRouter } from "next/router"
import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim"
import ProductsListing from "./ProductsListing"
import Breadcrumbs from "../BreadCrumbs"
import RenderTrays from "../RenderTrays"
import LoaderComponent from "../LoaderComponent"
import styles from './shopAll.module.css'

function ShopAll({ productsData, megaMenuData, trays }) {
    const router = useRouter();
    const { query } = router;
    const { slug } = query;
    const trayData = trays?.acf?.content_blocks;
    const additionalDataExt = trays?.acf_fields;
    // const trayData = { image: "https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/Firefighting-bannerimage.jpg", title: slug ? slug : 'Shop', speak_to_us_button: 'Speak To Us' }

    // return < section className={styles.mainCont} >
    //     <HeaderBannerSlim trayData={trayData} />
    //     <section className={styles.breadCrumbs}><Breadcrumbs /></section>
    //     <ProductsListing productsData={productsData} megaMenuData={megaMenuData} />
    // </section >
    return (
        <main>
            {trayData ?
                <RenderTrays trayData={trayData} productsData={productsData} megaMenuData={megaMenuData} additionalDataExt={additionalDataExt} />
                // ) : (
                //     <p>This Page Under Development</p>
                : <LoaderComponent />}
        </main>
    );
}
export default ShopAll