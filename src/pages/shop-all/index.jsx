import ShopAll from "@/components/ShopAll";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { productsUrl } from "@/utils/urls";

function ShopAllPage({ data }) {
    return <ShopAll productsData={data} />
}
export default ShopAllPage;

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(productsUrl);
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