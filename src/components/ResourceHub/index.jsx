import RenderTrays from "../RenderTrays";
import ResourceHubListing from "./ResourceHubListing";
import ResourceHubListingWithFilter from "./ResourceHubListingWithFilter";

function ResourceHub({ data, shouldShowListing }) {
    const trayData = data?.acf?.content_blocks;
    const listingData = data?.blogPosts;

    return <main>
        {trayData ? (
            <>
                <RenderTrays trayData={trayData} />
                {shouldShowListing ? <ResourceHubListingWithFilter listingData={listingData} /> : <ResourceHubListing listingData={listingData} />}
            </>
        ) : (
            <p>This Page Under Development</p>
        )}
    </main>
}
export default ResourceHub