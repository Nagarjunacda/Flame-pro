import ProductDetail from "@/components/ProductDetail"
import { homePageUrl } from "@/utils/urls"
import { handleServerSideProps } from "@/utils/handleServerSideData"

function ProductDetailPage() {
    return <ProductDetail />
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { productId } = params
    const { data, error } = await handleServerSideProps(homePageUrl);
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
