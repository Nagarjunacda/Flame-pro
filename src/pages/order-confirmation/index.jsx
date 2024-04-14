import { useRouter } from "next/router";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import BasketTitleBlock from "@/components/ContentBlocks/BasketTitleBlock";
import { orderConfirmationUrl } from "@/utils/urls";
import Breadcrumbs from "@/components/BreadCrumbs";
import BasketItems from "@/components/ContentBlocks/BasketItems";
import RenderTrays from "@/components/RenderTrays";

const OrderConfirmationPage = ({ data }) => {
  const router = useRouter();
  const { query } = router;
  const { ref } = query;
  const trayData = data?.acf?.content_blocks;
  const additionalDataExt = data?.acf_fields;

  return (
    <>
      <Breadcrumbs isPadding />
      <BasketTitleBlock
        title={"Thank You For Submitting Your Quote"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        }
        subHeading={`Reference No. ${ref}`}
      />
      <RenderTrays trayData={trayData} additionalDataExt={additionalDataExt} />
    </>
  );
};

export default OrderConfirmationPage;

export async function getServerSideProps(context) {
  const { data, error } = await handleServerSideProps(orderConfirmationUrl);
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
