import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useProductCatData } from "@/context/ProductCatContext";
import ProductDetail from "@/components/ProductDetail";
import { productDetailUrl } from "@/utils/urls";
import { productsUrl } from "@/utils/urls";
import { handleGetReqAuth } from "@/utils/handleServerSideData";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { productsCategoryCustomUrl } from "@/utils/urls";
import ProductCard from "@/components/Cards/ProductCard";

const ShopAll = dynamic(() => import("@/components/ShopAll"));

function ProductDetailPage(props) {
    const { prductCatData } = useProductCatData();
    const { slug } = props;
    const [listingData, setListingData] = useState([]);
    const [isFromMenu, setIsFromMenu] = useState({})
    const { data } = props;
    const productData = data && data[0];
    const objectId = prductCatData?.object_id;
    const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots', 'full-solutions', 'consumables', 'flash-hoods'];
    const isProducts = arr.includes(slug);

    useEffect(() => {
        const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots', 'consumables', 'flash-hoods', 'full-solutions'];
        const isProducts = arr.includes(slug);
        setIsFromMenu({ isFromMenu: true, category: objectId })
        // const objectId = prductCatData?.object_id;
        // const url = `${productsUrl}/?category=${objectId}`
        // const getData = async () => {
        //     const { data, error } = await handleServerSideProps(url);
        //     setListingData(data)
        // }
        // getData()
    }, [prductCatData])
    // return <>{data && data?.length > 1 ? <ShopAll productsData={data} /> : data && data?.length == 1 ? <ProductDetail productData={productData} /> : null}</>
    return isProducts ? <ShopAll productData={listingData} megaMenuData={isFromMenu} /> : <ProductDetail productData={productData} />
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    const { productId } = params
    // const arr = ['accessory-bundles', 'coveralls', 'jackets-trousers', 'gloves', 'full-suits-suits', 'helmets', 'boots'];
    // const isProducts = arr.includes(slug);
    // const url = isProducts ? `${productDetailUrl}/?categories=${slug}` : `${productDetailUrl}/?slug=${slug}`;
    const url = `${productDetailUrl}/?slug=${slug}`;
    const { data, error } = await handleGetReqAuth(url);
    if (error) {
        return {
            props: {
                data: null,
                slug: slug
            },
        };
    }

    return {
        props: {
            data,
            slug: slug
        },
    };
}
