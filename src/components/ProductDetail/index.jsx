import { useContext } from "react";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import { handlePostRequests } from "@/utils/handlePostCalls"
import { addToCartUrl } from "@/utils/urls"
import Breadcrumbs from "../BreadCrumbs";
import styles from './productDetail.module.css'

function ProductDetail({ productData }) {
    const { setTriggerUpdate } = useCartData();
    const nonceVal = useContext(NonceContext)
    const productId = productData?.id
    console.log(productData, '!!')

    const handleAddCart = async () => {
        const data = {
            id: productId,
            variation: [
                {
                    "attribute": "Gloves Size",
                    "value": "10"
                }
            ]
        }
        const customHeaders = { Nonce: nonceVal }
        const res = await handlePostRequests(addToCartUrl, data, customHeaders)
        if (res?.data) {
            setTriggerUpdate(true)
        }
    }
    return <main className={styles.mainCont}>
        <Breadcrumbs />
    </main>
}
export default ProductDetail