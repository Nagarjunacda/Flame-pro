import dynamic from 'next/dynamic';
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { productsUrl } from "@/utils/urls";
import ShopAll from '@/components/ShopAll';
import { allPageUrl } from '@/utils/urls';

function ShopAllPage({ data }) {
    const { products } = data;
    const { tray } = data;
    return <ShopAll productsData={products} trays={tray} />
}
export default ShopAllPage;

export async function getServerSideProps(context) {
    const url = `${productsUrl}?per_page=10&page=1`;
    const trayUrl = `${allPageUrl}/7`
    try {
        const [productsResponse, trayResponse] = await Promise.all([
            handleServerSideProps(url),
            handleServerSideProps(trayUrl),
        ]);

        const productsData = productsResponse.data;
        const trayData = trayResponse.data;

        if (!productsData || !trayData) {
            throw new Error('Failed to fetch data from one of the APIs');
        }
        const mergedData = { products: productsData, tray: trayData };
        return {
            props: {
                data: mergedData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            props: {
                data: null,
            },
        };
    }
}