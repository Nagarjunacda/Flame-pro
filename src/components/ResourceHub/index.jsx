import RenderTrays from "../RenderTrays";

function ResourceHub({ data }) {
    const trayData = data?.acf?.content_blocks;

    return <main>
        {trayData ? (
            <RenderTrays trayData={trayData} />
        ) : (
            <p>This Page Under Development</p>
        )}
    </main>
}
export default ResourceHub