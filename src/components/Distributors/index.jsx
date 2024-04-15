import RenderTrays from "../RenderTrays";

function Distributors({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;
    const additionalDataExt = data?.acf_fields;

    return (
        <main>
            {trayData ? (
                <RenderTrays trayData={trayData} additionalDataExt={additionalDataExt} />
            ) : (
                <p>!! Something went wrong please refresh the page</p>
            )}
        </main>
    );
}
export default Distributors