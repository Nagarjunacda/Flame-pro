import dynamic from "next/dynamic";
import { handleServerSideProps } from "@/utils/handleServerSideData"
import { allPageUrl } from "@/utils/urls"

const CatchAllBlock = dynamic(() => import("@/components/CatchAllBlock"));

function CatchAllPage(props) {
    return <CatchAllBlock pageData={props} />
}
export default CatchAllPage

export async function getServerSideProps(context) {
    const { query, params } = context
    const { slug } = params
    const { category } = query
    const url = `${allPageUrl}/?slug=${slug[0]}`;
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