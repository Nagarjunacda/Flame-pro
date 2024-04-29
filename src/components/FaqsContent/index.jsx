import RenderTrays from "../RenderTrays";
function FaqsContent({ pageData }) {
  //   const { data } = pageData;
  const trayData = pageData?.data?.acf?.content_blocks;
  const additionalDataExt = pageData?.data?.acf_fields;

  return (
    <main>
      {trayData ? (
        <RenderTrays trayData={trayData} additionalDataExt={additionalDataExt} />
      ) : (
        <p>This Page Under Development</p>
      )}
    </main>
  );
}
export default FaqsContent;
