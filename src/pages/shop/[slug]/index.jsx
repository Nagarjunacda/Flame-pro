import ProductDetail from "@/components/ProductDetail"
import { productDetailUrl } from "@/utils/urls"
import { handleGetReqAuth } from "@/utils/handleServerSideData"

function ProductDetailPage({ data }) {
    const productData = data && data[0];
    return <ProductDetail productData={productData} />
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    const { productId } = params
    const url = `${productDetailUrl}/?slug=${slug}`
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
