import ProductDetail from "@/components/ProductDetail";
import { productDetailUrl } from "@/utils/urls";
import { handleGetReqAuth } from "@/utils/handleServerSideData";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { productsCategoryCustomUrl } from "@/utils/urls";
import ShopAll from "@/components/ShopAll";

function ProductDetailPage(props) {
    const { data } = props;
    const productData = data && data[0];
    return <>{data && data?.length > 1 ? <ShopAll productsData={data} /> : data && data?.length == 1 ? <ProductDetail productData={productData} /> : null}</>
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    const { productId } = params
    const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots'];
    const isProducts = arr.includes(slug);
    const url = isProducts ? `${productDetailUrl}/?categories=${slug}` : `${productDetailUrl}/?slug=${slug}`;
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
