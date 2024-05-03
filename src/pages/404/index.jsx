import { handleServerSideProps } from "@/utils/handleServerSideData";
import { fireFightingUrl } from "@/utils/urls";
import PageNotFound from "@/components/PageNotFound";

function PageNotFoundPage(props) {
    return <PageNotFound pageData={props} />
}
export default PageNotFoundPage

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(fireFightingUrl);
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