import dynamic from "next/dynamic"
import { handleServerSideProps } from "@/utils/handleServerSideData"
import { productsUrl } from "@/utils/urls"

const ShopAll = dynamic(() => import("@/components/ShopAll"));

function ProductCategoryListing({ data }) {
    return <ShopAll productsData={data} />
}
export default ProductCategoryListing

export async function getServerSideProps(context) {
    const { query, params } = context
    const { category } = query
    const url = `${productsUrl}?category=${category}`
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