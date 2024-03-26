import ProductDetail from "@/components/ProductDetail"
import { productDetailUrl } from "@/utils/urls"
import { handleGetReqAuth } from "@/utils/handleServerSideData"

function ProductDetailPage({ data }) {
    return <ProductDetail productData={data} />
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { productId } = params
    const url = `${productDetailUrl}/${productId}`
    const { data, error } = await handleGetReqAuth(url);
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
