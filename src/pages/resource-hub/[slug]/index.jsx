import { useRouter } from "next/router";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { resourceHubPageUrl } from "@/utils/urls";
import { blogPostsCategoryUrl } from "@/utils/urls";
import { blogPostsUrl } from "@/utils/urls";
import BlogLanding from "@/components/ResourceHub/BlogLanding";
import ResourceHub from "@/components/ResourceHub";

function BlogCategoriesPage({ data }) {
    const router = useRouter();
    const { query } = router;
    const { slug } = query;
    const arr = ['technical-information', 'downloads', 'videos', 'case-studies', 'blogs'];
    const shouldShowListing = arr.includes(slug);
    // return <ResourceHub data={data} />;
    return shouldShowListing ? <ResourceHub data={data} shouldShowListing={shouldShowListing} /> : <BlogLanding pageData={data?.blogPosts[0]} />;
}
export default BlogCategoriesPage

export async function getServerSideProps(context) {
    const { query, params } = context
    const { slug } = params
    const arr = ['technical-information', 'downloads', 'videos', 'case-studies', 'blogs'];
    const shouldShowListing = arr.includes(slug);
    // const blogsUrl = `${blogPostsCategoryUrl}/${slug}`;
    const postDetailUrl = `${blogPostsUrl}/?_embed&slug=${slug}`;
    const listingUrl = `${blogPostsUrl}?per_page=10&page=1`;
    const url = shouldShowListing ? listingUrl : postDetailUrl;

    const { data: resourceHubData, error: resourceHubError } = await handleServerSideProps(resourceHubPageUrl);
    if (resourceHubError) {
        return {
            props: {
                data: null,
            },
        };
    }

    const { data: blogPostsData, error: blogPostsError } = await handleServerSideProps(url);
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