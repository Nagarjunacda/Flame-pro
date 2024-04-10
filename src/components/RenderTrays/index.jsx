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
import BasketItems from "../ContentBlocks/BasketItems";
import PoliciesBlock from "../ContentBlocks/PoliciesBlock";
import FaqItem from "../FaqItem";

function RenderTrays({ trayData, categories = {}, additionalDataExt }) {
  const caseStudyExt = additionalDataExt?.casestudy_ext;
  const resourceHubExt = additionalDataExt?.resources_hub_ext;
  const testimonialExt = additionalDataExt?.testimonial_slider_ext;

  function getTrays(tray) {
    switch (tray?.acf_fc_layout) {
      case "header_banner_with_cta":
        return <HeaderBanner trayData={tray} />;
      case "usp_block":
        return <UspBlock trayData={tray} />;
      case "title_and_text_centre":
        return <TitleAndTextCentre trayData={tray} />;
      case "two_ad_blocks":
        return <TwoAddBlockNew trayData={tray} />;
      case "resource_hub":
        return (
          <ResourceHubBlock trayData={tray} resourceHubExt={resourceHubExt} />
        );
      case "testimonial_slider_block":
        return <Testimonial trayData={tray} testimonialExt={testimonialExt} />;
      case "newsletter_sign_up":
        return <NewsLetterSignUp trayData={tray} />;
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
      case "basket_items":
        return <BasketItems trayData={tray} />;
      case "policies_select":
        return <PoliciesBlock trayData={tray} />;
      case "faq_block":
        return <FaqItem trayData={tray} />;
      default:
        return null;
    }
  }

  return (
    <main>
      {trayData &&
        trayData.map((tray) => {
          return (
            <>
              <section>{getTrays(tray)}</section>
              {tray?.acf_fc_layout === "header_banner_slim" && (
                <Breadcrumbs isPadding />
              )}
            </>
          );
        })}
    </main>
  );
}
export default RenderTrays;
