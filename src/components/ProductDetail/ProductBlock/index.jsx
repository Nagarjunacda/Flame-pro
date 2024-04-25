import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FlameImage from "@/reusbleComponents/FlameImage";
import DetailSliderComp from "@/reusbleComponents/DetailSliderComp";
import EditableDiv from "@/components/EditableDiv";
import { renderHTML } from "@/utils/htmlString";
import { useMediaQuery } from "react-responsive";
import Toast from "@/reusbleComponents/ToastMsg";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import ProductInfoMweb from "../ProductInfoMweb";
import ProductInfoDweb from "../ProductInfoDweb";
import UspBlock from "@/components/ContentBlocks/UspBlock";
import styles from "../productDetail.module.css";

function ProductBlock({
  productData,
  handleAddCart,
  getProductQuantity,
  isLoading,
  showToast,
  toastMsg,
  setShowToast,
}) {
  console.log(productData, '!!')
  const router = useRouter();
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const isLargeScr = useMediaQuery({ query: "(min-width:1280px)" });
  const productName = productData?.name;
  const trayTitle = "productDetail";
  const imgArr = productData?.images;
  const initailImage = imgArr && imgArr.length && imgArr[0]?.src;
  const [selectedImage, setSelectedImage] = useState(initailImage);
  const magnifierSrc = "/Images/magnifierLogo.svg";
  const description = productData?.description;
  const btnColor = "var(--color-primary)";
  const textColor = "var(--color-secondary)";
  const btnText = "Add To Quote Basket";
  const productInfo = productData?.acf?.product__data;
  const uspDataArry = productData?.acf?.content_blocks?.length;
  const uspData = uspDataArry ? productData?.acf?.content_blocks[0] : {}
  const productInfoCategories = productInfo?.map((e) => {
    return e?.title;
  });

  const infoArr = [
    "Additional Information",
    "Jackets",
    "Trousers",
    "Outer Layers",
    "Moisture Barrier",
    "Thermal Lining",
    "Wear Fit Guide",
    "Conforms To",
  ];

  const handleSpeakToUs = () => { };

  useEffect(() => {
    // Update the selected image based on the route
    const imgArr = productData?.images;
    const initailImage = imgArr && imgArr.length && imgArr[0]?.src;
    if (initailImage) {
      setSelectedImage(initailImage);
    }
  }, [router.query]);

  return (
    <section className={styles.pageContainer}>
      <section className={styles.productBlock}>
        <section className={styles.imageAndText}>
          {!isDesktop && <h1 className={styles.title}>{productName}</h1>}
          <section className={styles.imageBlock}>
            <section className={styles.mainImg}>
              <FlameImage src={selectedImage ? selectedImage : initailImage} alt={"productImg"} imageFit></FlameImage>
              {/* <section className={styles.magnifier}>
                <FlameImage src={magnifierSrc} alt={"magnifier"}></FlameImage>
              </section> */}
            </section>
            <section className={styles.sliderSection}>
              <DetailSliderComp
                data={imgArr}
                setSelectedImage={setSelectedImage}
              />
            </section>
          </section>
        </section>
        <section className={styles.descCont}>
          <section className={styles.infoBlock}>
            {isDesktop && <h1 className={styles.title}>{productName}</h1>}
            <section>{renderHTML(description)}</section>
          </section>
          {showToast && (
            <Toast
              showToast={showToast}
              setShowToast={setShowToast}
              toastMsg={toastMsg}
            />
          )}
          <section className={styles.inputAndCta}>
            <section className={styles.inputBlock}>
              <h6 className={styles.quantity}>Quantity</h6>
              <EditableDiv getProductQuantity={getProductQuantity} />
            </section>
            <section className={styles.ctaSection}>
              <section>
                <FlameBtn
                  color={btnColor}
                  text={btnText}
                  textColor={textColor}
                  isLoadState={isLoading}
                  btnFunction={handleAddCart}
                  isSmallBtn={isLargeScr ? false : true}
                />
              </section>
              <section className={styles.btnStyle2}>
                <ButtonStyleTwo
                  text={"Speak To Us"}
                  textColor={"var( --color-primary)"}
                  btnFunction={handleSpeakToUs}
                  isLoadState={false}
                />
              </section>
            </section>
          </section>
          <UspBlock trayData={uspData} />
        </section>
      </section>
      <section className={styles.productInfoCont}>
        {isDesktop ? (
          <ProductInfoDweb
            data={productInfoCategories}
            productInfo={productInfo}
          />
        ) : (
          <ProductInfoMweb
            data={productInfoCategories}
            productInfo={productInfo}
          />
        )}
      </section>
    </section>
  );
}
export default ProductBlock;
