import { useContext } from "react";
import NonceContext from "@/context/NonceContext";
import { handlePostRequests } from "@/utils/handlePostCalls"
import { addToCartUrl } from "@/utils/urls"

function ProductDetail() {
    const nonceVal = useContext(NonceContext)
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
    }
    return <button onClick={handleAddCart}>Add to Cart</button>
}
export default ProductDetail