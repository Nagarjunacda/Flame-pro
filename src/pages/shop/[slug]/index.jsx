import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useProductCatData } from "@/context/ProductCatContext";
import ProductDetail from "@/components/ProductDetail";
import { productDetailUrl } from "@/utils/urls";
import { productsUrl } from "@/utils/urls";
import { useHeaderData } from "@/context/headerContext";
import { handleGetReqAuth } from "@/utils/handleServerSideData";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { productsCategoryCustomUrl } from "@/utils/urls";
import ProductCard from "@/components/Cards/ProductCard";

const ShopAll = dynamic(() => import("@/components/ShopAll"));

function ProductDetailPage(props) {
    const { prductCatData } = useProductCatData();
    const { headerConData } = useHeaderData();
    const { slug } = props;
    const [listingData, setListingData] = useState([]);
    const [isFromMenu, setIsFromMenu] = useState({});
    const [trayData, setTrayData] = useState({});
    const { data } = props;
    const productData = data && data[0];
    const objectId = prductCatData?.object_id;
    const fireFighterArr = headerConData?.items?.filter((navItems) => {
        return navItems?.slug === 'firefighting-ppe'
    })
    const fireFighterProducts = fireFighterArr && fireFighterArr.length && fireFighterArr[0]?.child_items?.filter((e) => {
        return e?.title === "Products"
    })
    const fireFighterSlugs = fireFighterProducts && fireFighterProducts?.length && fireFighterProducts[0]?.child_items?.map((e) => {
        return e?.slug
    })
    const filterByslug = fireFighterProducts && fireFighterProducts?.length && fireFighterProducts[0]?.child_items?.filter((e) => {
        return e?.slug === slug
    })
    const id = filterByslug && filterByslug?.length && filterByslug[0]?.object_id;
    const isProducts = fireFighterSlugs?.includes(slug);

    useEffect(() => {
        setIsFromMenu({ isFromMenu: true, category: objectId })
        const trayUrl = `${productDetailUrl}/categories/${id}`;
        const getData = async () => {
            const { data, error } = await handleGetReqAuth(trayUrl);
            if (data) {
                setTrayData(data);
            }
            if (error) {
                setTrayData({});
            }
        }
        getData();
    }, [prductCatData, slug])
    return isProducts ? <ShopAll productData={listingData} megaMenuData={isFromMenu} trays={trayData} /> : <ProductDetail productData={productData} />
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    const url = `${productDetailUrl}/?slug=${slug}`;
    const fireFighterArr = headerConData?.items?.filter((navItems) => {
        return navItems?.slug === 'firefighting-ppe'
    })
    const fireFighterProducts = fireFighterArr && fireFighterArr.length && fireFighterArr[0]?.child_items?.filter((e) => {
        return e?.title === "Products"
    })
    const filterByslug = fireFighterProducts && fireFighterProducts?.length && fireFighterProducts[0]?.child_items?.filter((e) => {
        return e?.slug === slug
    })
    const id = filterByslug && filterByslug?.length && filterByslug[0]?.object_id;
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
