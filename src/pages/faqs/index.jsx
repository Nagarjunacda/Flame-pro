import FaqsContent from "@/components/FaqsContent";
import HeaderBannerSlim from "@/components/ContentBlocks/HeaderBannerSlim";
import Breadcrumbs from "@/components/BreadCrumbs";
import { faqPageUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
function Faqs(props) {
  return (
    <>
      <FaqsContent pageData={props} />
    </>
  );
}
export default Faqs;

export async function getServerSideProps(context) {
  const { data, error } = await handleServerSideProps(faqPageUrl);
  if (error) {
    return {
      props: {
        data: null,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
