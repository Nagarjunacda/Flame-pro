import DefenceProcurement from "@/components/Defence";
import { defenceUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";

function DefenceProcurementPage(props) {
    return <DefenceProcurement pageData={props} />
}
export default DefenceProcurementPage

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(defenceUrl);
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