import CaseStudyBlock from "../ContentBlocks/CaseStudyBlock";
import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim";
import NewsLetterSignUp from "../ContentBlocks/NewsLetterSignUp";
import ResourceHubBlock from "../ContentBlocks/ResourceHubBlock";
import Testimonial from "../ContentBlocks/Testimonial";

function FireFighting({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;
    console.log(trayData, '!!')

    function getTrays(tray) {
        switch (tray?.acf_fc_layout) {
            case "header_banner_slim":
                return <HeaderBannerSlim trayData={tray} />;
            case "testimonial_slider_block":
                return <Testimonial trayData={tray} />;
            case "case_studies_block":
                return <CaseStudyBlock trayData={tray} />;
            case "newsletter_sign_up":
                return <NewsLetterSignUp trayData={tray} />;
            case "resource_hub":
                return <ResourceHubBlock trayData={tray} />;
            default:
                return null;
        }
    }

    return <main>
        {trayData ? (
            trayData.map((tray) => {
                return getTrays(tray);
            })
        ) : (
            <p>Something went wrong unable to fetch the data</p>
        )}
    </main>
}
export default FireFighting