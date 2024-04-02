import RenderTrays from "../RenderTrays";

function CatchAllBlock({ pageData }) {
  const { data } = pageData;
  const trayData = data?.acf?.content_blocks;
  const categories = data?.category_info;

  return (
    <main>
      {trayData ? (
        <RenderTrays trayData={trayData} categories={categories} />
      ) : (
        <p>This Page Under Development</p>
      )}
    </main>
  );
}
export default CatchAllBlock;
