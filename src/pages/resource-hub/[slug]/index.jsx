import { handleServerSideProps } from "@/utils/handleServerSideData";
import { resourceHubPageUrl } from "@/utils/urls";
import { blogPostsCategoryUrl } from "@/utils/urls";
import ResourceHub from "@/components/ResourceHub";

function BlogCategoriesPage({ data }) {
    return <ResourceHub data={data} />;
}
export default BlogCategoriesPage

export async function getServerSideProps(context) {
    const { query, params } = context
    const { slug } = params
    const blogsUrl = `${blogPostsCategoryUrl}/${slug}`;
    const { data: resourceHubData, error: resourceHubError } = await handleServerSideProps(resourceHubPageUrl);
    if (resourceHubError) {
        return {
            props: {
                data: null,
            },
        };
    }

    const { data: blogPostsData, error: blogPostsError } = await handleServerSideProps(blogsUrl);
    if (blogPostsError) {
        return {
            props: {
                data: null,
            },
        };
    }
    const blogPostsArray = Array.isArray(blogPostsData) ? blogPostsData : [];
    const data = { ...resourceHubData, blogPosts: blogPostsArray };

    return {
        props: {
            data,
        },
    };
}