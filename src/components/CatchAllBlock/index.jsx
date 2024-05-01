import _ from 'lodash';
import LoaderComponent from "../LoaderComponent";
import RenderTrays from "../RenderTrays";

function CatchAllBlock({ pageData }) {
  const { data } = pageData;
  const isNotEmpty = !_.isEmpty(data);
  const trayData = isNotEmpty && data[0]?.acf?.content_blocks;
  const additionalDataExt = isNotEmpty && data[0]?.acf_fields;
  const categories = data?.category_info;

  return (
    <main>
      {isNotEmpty ?
        <RenderTrays trayData={trayData} categories={categories} additionalDataExt={additionalDataExt} />
        :
        <LoaderComponent />
      }
    </main>
  );
}
export default CatchAllBlock;
