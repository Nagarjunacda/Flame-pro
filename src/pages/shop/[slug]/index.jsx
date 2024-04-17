import ProductDetail from "@/components/ProductDetail"
import { productDetailUrl } from "@/utils/urls"
import { handleGetReqAuth } from "@/utils/handleServerSideData"
import ShopAll from "@/components/ShopAll"

function ProductDetailPage(props) {
    const { data, isProducts } = props;
    const productData = data && data[0];
    return <>{isProducts ? <ShopAll productsData={data} /> : <ProductDetail productData={productData} />}</>
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    const { productId } = params
    const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots'];
    const isProducts = arr.includes(slug);
    // const url = isProducts ? `${productsUrl}?` : `${productDetailUrl}/?slug=${slug}`;
    const url = `${productDetailUrl}/?slug=${slug}`
    const { data, error } = await handleGetReqAuth(url);
    if (error) {
        return {
            props: {
                data: null,
                isProducts: false
            },
        };
    }

    return {
        props: {
            data,
            isProducts,
        },
    };
}
