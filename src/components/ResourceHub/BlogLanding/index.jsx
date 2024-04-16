import RenderTrays from "@/components/RenderTrays";
import HeaderBannerSlim from "@/components/ContentBlocks/HeaderBannerSlim";
import PostContent from "../PostContent";
import Breadcrumbs from "@/components/BreadCrumbs";

function BlogLanding({ pageData }) {
    const trayData = pageData?.acf?.content_blocks;
    const title = pageData?.title?.rendered;
    const headerBannerData = { image: "https://flameprodev.cda-development3.co.uk/cms/wp-content/uploads/2024/02/Firefighting-bannerimage.jpg", title: title }

    return <main>
        <>
            <HeaderBannerSlim trayData={headerBannerData} />
            <Breadcrumbs isPadding />
            <PostContent trayData={trayData} fullPageData={pageData} />;
        </>
    </main>
}
export default BlogLanding