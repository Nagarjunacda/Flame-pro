import BlogLanding from "@/components/ResourceHub/BlogLanding";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { blogPostsUrl } from "@/utils/urls";

function BlogLandingPage({ data }) {
    const pageData = data && data?.length ? data[0] : data
    return <BlogLanding pageData={pageData} />
}
export default BlogLandingPage

export async function getServerSideProps(context) {
    const { params } = context
    const { postId } = params
    const url = `${blogPostsUrl}/?slug=${postId}`
    const { data, error } = await handleServerSideProps(url);
    if (error) {
        return {
            props: {
                data: null,
            },
        };
    }

    return {
        props: {
            data,
        },
    };
}