import RenderTrays from "@/components/RenderTrays";
import HeaderBannerSlim from "@/components/ContentBlocks/HeaderBannerSlim";
import PolicesContent from "@/components/PolicesContent";

import Breadcrumbs from "@/components/BreadCrumbs";

function PolicesLanding({ pageData }) {
  const trayData = pageData;
  return (
    <main>
      <>
        <Breadcrumbs isPadding />
        <PolicesContent trayData={trayData} />
      </>
    </main>
  );
}
export default PolicesLanding;
