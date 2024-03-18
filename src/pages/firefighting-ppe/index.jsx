import FireFighting from "@/components/FireFighting"
import { fireFightingUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";

function FireFightingPage(props) {
    return <FireFighting pageData={props} />
}
export default FireFightingPage

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