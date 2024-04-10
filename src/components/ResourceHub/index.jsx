import RenderTrays from "../RenderTrays";
import ResourceHubListing from "./ResourceHubListing";

function ResourceHub({ data }) {
    const trayData = data?.acf?.content_blocks;
    const listingData = data?.blogPosts;

    return <main>
        {trayData ? (
            <>
                <RenderTrays trayData={trayData} />
                <ResourceHubListing listingData={listingData} />
            </>
        ) : (
            <p>This Page Under Development</p>
        )}
    </main>
}
export default ResourceHub