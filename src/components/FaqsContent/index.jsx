import RenderTrays from "../RenderTrays";
function FaqsContent({ pageData }) {
  //   const { data } = pageData;
  const trayData = pageData?.data?.acf?.content_blocks;
  console.log(trayData, "trayData!!");

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
export default FaqsContent;
