import { useContext, useState } from "react";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import ProductBlock from "./ProductBlock";
import { handlePostRequests } from "@/utils/handlePostCalls";
import { addToCartUrl } from "@/utils/urls";
import Breadcrumbs from "../BreadCrumbs";
import styles from "./productDetail.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import Popup from "@/reusbleComponents/Popup";

function ProductDetail({ productData }) {
  const [showPopup, setShowPopup] = useState(false);
  const { setTriggerUpdate } = useCartData();
  const nonceVal = useContext(NonceContext);
  const productId = productData?.id;

  const handleAddCart = async () => {
    const data = {
      id: productId,
      // variation: [
      //     {
      //         "attribute": "Gloves Size",
      //         "value": "10"
      //     }
      // ]
    };
    const customHeaders = { Nonce: nonceVal };
    const res = await handlePostRequests(addToCartUrl, data, customHeaders);
    if (res?.data) {
      setTriggerUpdate(true);
      setShowPopup(true);
    }
  };
  return (
    <main className={styles.mainCont}>
      <Breadcrumbs />
      <ProductBlock productData={productData} />
      <ButtonStyleTwo
        textColor={"#000"}
        text={"ADD TO BASKET"}
        btnFunction={handleAddCart}
      />
      <Popup show={showPopup} setShow={setShowPopup} />
    </main>
  );
}
export default ProductDetail;
