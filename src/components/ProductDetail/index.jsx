import { useContext } from "react";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import { handlePostRequests } from "@/utils/handlePostCalls"
import { addToCartUrl } from "@/utils/urls"

function ProductDetail({ productData }) {
    const nonceVal = useContext(NonceContext)
    const { setTriggerUpdate } = useCartData();
    const handleAddCart = async () => {
        const data = {
            "id": 3727,
            "variation": [
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
    return <button onClick={handleAddCart}>Add to Cart</button>
}
export default ProductDetail