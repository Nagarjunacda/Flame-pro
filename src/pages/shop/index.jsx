import dynamic from 'next/dynamic';
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { productsUrl } from "@/utils/urls";

const ShopAll = dynamic(() => import("@/components/ShopAll"));

function ShopAllPage({ data }) {
    return <ShopAll productsData={data} />
}
export default ShopAllPage;

export async function getServerSideProps(context) {
    const url = `${productsUrl}?per_page=10&page=1`
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