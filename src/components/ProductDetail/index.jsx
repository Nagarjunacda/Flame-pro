import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import { useFooterContextData } from "@/context/FooterDataContext";
import ProductBlock from "./ProductBlock";
import { handlePostRequests } from "@/utils/handlePostCalls";
import { addToCartUrl } from "@/utils/urls";
import RenderTrays from "../RenderTrays";
import Breadcrumbs from "../BreadCrumbs";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import Popup from "@/reusbleComponents/Popup";
import styles from "./productDetail.module.css";

function ProductDetail({ productData }) {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const { footerContextData } = useFooterContextData();
  const trays = footerContextData?.acf?.content_blocks;
  const { setTriggerUpdate } = useCartData();
  const [productQuantity, setProductQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const nonceVal = useContext(NonceContext);
  const productId = productData?.id;

  useEffect(() => {
    if (!productData) {
      router.push("/shop");
    }
  }, []);

  const handleAddCart = async () => {
    const data = {
      id: productId,
      quantity: productQuantity,
    };
    if (!productQuantity) {
      setShowToast(true);
      setToastMsg('Mininum quantity should be atleast 1');
      return
    }
    setIsLoading(true);
    const customHeaders = { Nonce: nonceVal };
    const res = await handlePostRequests(addToCartUrl, data, customHeaders);
    if (res?.data) {
      setTriggerUpdate(true);
      setShowPopup(true);
      setIsLoading(false);
    }
    if (res?.error) {
      const errMsg = "Something went wrong!";
      setIsLoading(false);
      setShowToast(true);
      setToastMsg("Something went wrong!");
    }
  };

  const getProductQuantity = (quant) => {
    setProductQuantity(quant);
  };

  return (
    <>
      {productData &&
        <main className={styles.mainCont}>
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
          {/* <RenderTrays trayData={trays} /> */}
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
        </main>}
    </>
  );
}
export default ProductDetail;
