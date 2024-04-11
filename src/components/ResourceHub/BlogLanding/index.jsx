import RenderTrays from "@/components/RenderTrays";

function BlogLanding({ pageData }) {
    const trayData = pageData?.acf?.content_blocks;
    return <main>
        {trayData ? (
            <RenderTrays trayData={trayData} fullPageData={pageData} />
        ) : (
            <p>This Page Under Development</p>
        )}
    </main>
}
export default BlogLanding