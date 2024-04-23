import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import ProductBlock from "./ProductBlock";
import { handlePostRequests } from "@/utils/handlePostCalls";
import { addToCartUrl } from "@/utils/urls";
import Breadcrumbs from "../BreadCrumbs";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import Popup from "@/reusbleComponents/Popup";
import styles from "./productDetail.module.css";

function ProductDetail({ productData }) {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const { setTriggerUpdate } = useCartData();
  const [productQuantity, setProductQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const nonceVal = useContext(NonceContext);
  const productId = productData?.id;

  useEffect(() => {
    if (!productData) {
      router.push('/shop')
    }
  }, [])

  const handleAddCart = async () => {
    const data = {
      id: productId,
      quantity: productQuantity,
    };
    setIsLoading(true);
    const customHeaders = { Nonce: nonceVal };
    const res = await handlePostRequests(addToCartUrl, data, customHeaders);
    if (res?.data) {
      setTriggerUpdate(true);
      setShowPopup(true);
      setIsLoading(false);
    }
    if (res?.error) {
      const errMsg = res?.error?.response?.data?.message;
      setIsLoading(false);
      setShowToast(true);
      setToastMsg(
        errMsg || "An error occurred during the request. Please try again."
      );
    }
  };

  const getProductQuantity = (quant) => {
    setProductQuantity(quant);
  };

  return (
    <>
      {productData ? <main className={styles.mainCont}>
        <Breadcrumbs />
        <ProductBlock
          productData={productData}
          showToast={showToast}
          setShowToast={setShowToast}
          toastMsg={toastMsg}
          handleAddCart={handleAddCart}
          isLoading={isLoading}
          getProductQuantity={getProductQuantity}
        />
        {/* <ButtonStyleTwo
        textColor={"#000"}
        text={"ADD TO BASKET"}
        btnFunction={handleAddCart}
      /> */}
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          productData={productData}
        />
      </main> : <h2 className={styles.errorText}>No Product Data Found Redirecting To Shop Page </h2>}
    </>
  );
}
export default ProductDetail;
