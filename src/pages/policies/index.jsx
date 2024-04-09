import Breadcrumbs from "@/components/BreadCrumbs";
import HeaderBannerSlim from "@/components/ContentBlocks/HeaderBannerSlim";
import PoliciesBlock from "@/components/ContentBlocks/PoliciesBlock";
import RenderTrays from "@/components/RenderTrays";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { policiesUrl } from "@/utils/urls";
function Policies({ data }) {
  const trayData = data?.acf?.content_blocks;
  return (
    <main>
      {trayData ? (
        <RenderTrays trayData={trayData} />
      ) : (
        <p>This Page Under Development</p>
      )}
    </main>
  );
}
export default Policies;
export async function getServerSideProps(context) {
  const { data, error } = await handleServerSideProps(policiesUrl);
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
