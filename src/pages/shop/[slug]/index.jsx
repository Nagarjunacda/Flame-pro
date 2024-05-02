import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetail from "@/components/ProductDetail";
import { productDetailUrl } from "@/utils/urls";
import { headerMenuUrl } from "@/utils/urls";
import { useFireFightingData } from "@/context/FireFightingContext";
import { handleGetReqAuth } from "@/utils/handleServerSideData";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import ShopAll from "@/components/ShopAll";
import { isEmpty } from "lodash";

function ProductDetailPage(props) {
    const router = useRouter();
    const [listingData, setListingData] = useState([]);
    const { setFireFightingProData } = useFireFightingData();
    const { data1, data2, data3, isProducts } = props;
    const productData = data1 && data1[0];

    useEffect(() => {
        setFireFightingProData(data2);
        if (!isProducts && isEmpty(data1)) {
            router.push('/shop')
        }
    }, [])

    return !productData ? <ShopAll productData={listingData} trays={data3} /> : <ProductDetail productData={productData} />
}
export default ProductDetailPage

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
    const url = `${productDetailUrl}/?slug=${slug}`;

    try {
        const [data1, data2] = await Promise.all([
            handleGetReqAuth(url),
            handleServerSideProps(headerMenuUrl)
        ]);

        // Extract IDs from data2
        const fireFighterArr = data2?.data?.items?.filter((navItems) => {
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

        // Make another API call with the extracted IDs
        const trayUrl = `${productDetailUrl}/categories/${id}`;
        const { data: data3, error: error3 } = await handleGetReqAuth(trayUrl);
        if (isProducts) {
            if (error3) {
                throw new Error(`Error fetching data3: ${error3.message}`);
            }
        }

        return {
            props: {
                data1: data1.data || null,
                data2: data2.data || null,
                data3: data3 || null,
                slug: slug,
                isProducts: isProducts
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);

        return {
            props: {
                data1: null,
                data2: null,
                data3: null,
                slug: slug
            },
        };
    }
}

