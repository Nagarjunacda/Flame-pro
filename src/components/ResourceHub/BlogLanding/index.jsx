import { useEffect } from "react";
import { useRouter } from "next/router";
import RenderTrays from "@/components/RenderTrays";
import HeaderBannerSlim from "@/components/ContentBlocks/HeaderBannerSlim";
import PostContent from "../PostContent";
import Breadcrumbs from "@/components/BreadCrumbs";
import styles from '../../../styles/blogLanding.module.css'

function BlogLanding({ pageData }) {
    const router = useRouter();
    const trayData = pageData?.acf?.content_blocks;
    const title = pageData?.title?.rendered;
    const headerBannerData = { image: "https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/Firefighting-bannerimage.jpg", title: title }

    useEffect(() => {
        if (!pageData?.length) {
            router.push('/resource-hub');
        }
    }, [])

    return <main>
        {pageData?.length ? <>
            <HeaderBannerSlim trayData={headerBannerData} />
            <Breadcrumbs isPadding />
            <PostContent trayData={trayData} fullPageData={pageData} />
            <RenderTrays trayData={trayData} />
        </> : <h2 className={styles.errorText}>No Blog Data Found Redirecting To Resource Hub </h2>}
    </main>
}
export default BlogLanding