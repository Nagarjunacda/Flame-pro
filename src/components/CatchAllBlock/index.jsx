import RenderTrays from "../RenderTrays";
import _ from 'lodash';

function CatchAllBlock({ pageData }) {
  const { data } = pageData;
  const isNotEmpty = !_.isEmpty(data);
  const trayData = isNotEmpty && data[0]?.acf?.content_blocks;
  const additionalDataExt = isNotEmpty && data[0]?.acf_fields;
  const categories = data?.category_info;

  return (
    <main>
      {trayData ? (
        <RenderTrays trayData={trayData} categories={categories} additionalDataExt={additionalDataExt} />
      ) : (
        <p>404 Page Not Found</p>
      )}
    </main>
  );
}
export default CatchAllBlock;
