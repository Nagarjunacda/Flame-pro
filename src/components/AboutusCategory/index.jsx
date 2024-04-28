import RenderTrays from "../RenderTrays";

function AboutusCategory({ pageData }) {
    const { data } = pageData;
    const trayData = data && data?.length && data[0]?.acf?.content_blocks;
    const additionalDataExt = data && data?.length && data[0]?.acf_fields;

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
export default AboutusCategory