import CaseStudyBlock from "../ContentBlocks/CaseStudyBlock";
import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim";
import ImageRightTextLeft from "../ContentBlocks/ImageRightTextLeft";
import NewsLetterSignUp from "../ContentBlocks/NewsLetterSignUp";
import ResourceHubBlock from "../ContentBlocks/ResourceHubBlock";
import Testimonial from "../ContentBlocks/Testimonial";
import FullWidthAdBlock from "../ContentBlocks/FullWidthAdBlock";
import TitleAndTextCentre from "../ContentBlocks/TitleAndTextCentre";
import ImageLeftTextRight from "../ContentBlocks/ImageLeftTextRight";
import FourCategoryBlock from "../ContentBlocks/FourCategoryBlock";

function FireFighting({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;
    console.log(trayData, '!!')

    function getTrays(tray) {
        switch (tray?.acf_fc_layout) {
            case "header_banner_slim":
                return <HeaderBannerSlim trayData={tray} />;
            case "title_and_text_centre":
                return <TitleAndTextCentre trayData={tray} />;
            case "image_right_text_left":
                return <ImageRightTextLeft trayData={tray} />;
            case "image_left_text_right":
                return <ImageLeftTextRight trayData={tray} />;
            case "testimonial_slider_block":
                return <Testimonial trayData={tray} />;
            case "case_studies_block":
                return <CaseStudyBlock trayData={tray} />;
            case "newsletter_sign_up":
                return <NewsLetterSignUp trayData={tray} />;
            case "full_width_ad_block":
                return <FullWidthAdBlock trayData={tray} />;
            case "resource_hub":
                return <ResourceHubBlock trayData={tray} />;
            case "four_category_blocks":
                return <FourCategoryBlock trayData={tray} />;
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