import RenderTrays from "../RenderTrays";

function DefenceProcurement({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;
    const categories = data?.category_info;

    return <main>
        {trayData ? (
            <RenderTrays trayData={trayData} categories={categories} />
        ) : (
            <p>Something went wrong unable to fetch the data</p>
        )}
    </main>
}
export default DefenceProcurement