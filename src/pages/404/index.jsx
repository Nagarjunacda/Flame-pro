import { handleServerSideProps } from "@/utils/handleServerSideData";
import { pageNotFoundUrl } from "@/utils/urls";
import PageNotFound from "@/components/PageNotFound";

function PageNotFoundPage(props) {
    return <PageNotFound pageData={props} />
}
export default PageNotFoundPage

export async function getStaticProps(context) {
    const { data, error } = await handleServerSideProps(pageNotFoundUrl);
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