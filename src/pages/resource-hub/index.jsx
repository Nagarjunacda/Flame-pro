import ResourceHub from "@/components/ResourceHub"
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { resourceHubPageUrl } from "@/utils/urls";

function ResourceHubPage({ data }) {
    return <ResourceHub data={data} />
}
export default ResourceHubPage

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(resourceHubPageUrl);
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