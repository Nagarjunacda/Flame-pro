import { useContext } from "react";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import ProductBlock from "./ProductBlock";
import { handlePostRequests } from "@/utils/handlePostCalls";
import { addToCartUrl } from "@/utils/urls";
import Breadcrumbs from "../BreadCrumbs";
import styles from "./productDetail.module.css";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function ProductDetail({ productData }) {
  const { setTriggerUpdate } = useCartData();
  const nonceVal = useContext(NonceContext);
  const productId = productData?.id;

  const handleAddCart = async () => {
    console.log("hello");
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
    </main>
  );
}
export default ProductDetail;
