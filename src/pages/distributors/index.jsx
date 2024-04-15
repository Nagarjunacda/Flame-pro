import Distributors from "@/components/Distributors";
import { distributorsUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";

function DistributorsPage(props) {
    return <Distributors pageData={props} />
}
export default DistributorsPage

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(distributorsUrl);
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