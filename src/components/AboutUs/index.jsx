import RenderTrays from "../RenderTrays";

function AboutUs({ pageData }) {
  const { data } = pageData;
  const trayData = data?.acf?.content_blocks;
  const additionalDataExt = data?.acf_fields;
  const categories = data?.category_info;

  return (
    <main>
      {trayData ? (
        <RenderTrays
          trayData={trayData}
          categories={categories}
          additionalDataExt={additionalDataExt}
        />
      ) : (
        <p>This Page Under Development</p>
      )}
    </main>
  );
}
export default AboutUs;
