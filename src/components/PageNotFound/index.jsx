import RenderTrays from "../RenderTrays"

function PageNotFound({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;
    const additionalDataExt = data?.acf_fields;
    const categories = data?.category_info;

    return <main>
        {trayData ? (
            <RenderTrays trayData={trayData} categories={categories} additionalDataExt={additionalDataExt} />
        ) : (
            <p>Something Went Wrong!</p>
        )}
    </main>
}
export default PageNotFound