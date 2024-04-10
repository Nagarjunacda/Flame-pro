import ResourceHub from "@/components/ResourceHub";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { resourceHubPageUrl, blogPostsUrl } from "@/utils/urls";

function ResourceHubPage({ data }) {
    return <ResourceHub data={data} />;
}

export default ResourceHubPage;

export async function getServerSideProps(context) {
    const { data: resourceHubData, error: resourceHubError } = await handleServerSideProps(resourceHubPageUrl);
    if (resourceHubError) {
        return {
            props: {
                data: null,
            },
        };
    }

    const { data: blogPostsData, error: blogPostsError } = await handleServerSideProps(blogPostsUrl);
    if (blogPostsError) {
        return {
            props: {
                data: null,
            },
        };
    }

    // Ensure blogPostsData is an array
    const blogPostsArray = Array.isArray(blogPostsData) ? blogPostsData : [];

    // Merge the data from both APIs
    const data = { ...resourceHubData, blogPosts: blogPostsArray };

    return {
        props: {
            data,
        },
    };
}
