import CaseStudyBlock from "../ContentBlocks/CaseStudyBlock";
import ContactFormBlock from "../ContentBlocks/ContactFormBlock";
import FourCategoryBlock from "../ContentBlocks/FourCategoryBlock";
import FullWidthAdBlock from "../ContentBlocks/FullWidthAdBlock";
import HeaderBanner from "../ContentBlocks/HeaderBanner";
import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim";
import ImageLeftTextRight from "../ContentBlocks/ImageLeftTextRight";
import ImageRightTextLeft from "../ContentBlocks/ImageRightTextLeft";
import NewsLetterSignUp from "../ContentBlocks/NewsLetterSignUp";
import ResourceHubBlock from "../ContentBlocks/ResourceHubBlock";
import Testimonial from "../ContentBlocks/Testimonial";
import TitleAndTextCentre from "../ContentBlocks/TitleAndTextCentre";
import Breadcrumbs from "../BreadCrumbs";
import TwoAddBlockNew from "../ContentBlocks/TwoAddBlockNew";
import UspBlock from "../ContentBlocks/UspBlock";

function RenderTrays({ trayData, categories = {} }) {

    function getTrays(tray) {
        switch (tray?.acf_fc_layout) {
            case "header_banner_with_cta":
                return <HeaderBanner trayData={tray} />; //completed
            case "usp_block":
                return <UspBlock trayData={tray} />; //completed some doubt
            case "title_and_text_centre":
                return <TitleAndTextCentre trayData={tray} />; //completed
            case "two_ad_blocks":
                return <TwoAddBlockNew trayData={tray} />; //completed
            case "resource_hub":
                return <ResourceHubBlock trayData={tray} />; // completed
            case "testimonial_slider_block":
                return <Testimonial trayData={tray} />;
            case "newsletter_sign_up":
                return <NewsLetterSignUp trayData={tray} />; //completed
            case "case_studies_block":
                return <CaseStudyBlock trayData={tray} />;
            case "header_banner_slim":
                return <HeaderBannerSlim trayData={tray} />;
            case "image_right_text_left":
                return <ImageRightTextLeft trayData={tray} />;
            case "image_left_text_right":
                return <ImageLeftTextRight trayData={tray} />;
            case "full_width_ad_block":
                return <FullWidthAdBlock trayData={tray} />;
            case "four_category_blocks":
                return <FourCategoryBlock trayData={tray} categories={categories} />;
            case "contact_form":
                return <ContactFormBlock trayData={tray} />;
            default:
                return null;
        }
    }

    return <main>
        {trayData && (
            trayData.map((tray) => {
                return <><section>{getTrays(tray)}</section>
                    {tray?.acf_fc_layout === "header_banner_slim" && <Breadcrumbs />}</>
            })
        )}
    </main>
}
export default RenderTrays