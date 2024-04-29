import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { useHeaderData } from "@/context/headerContext";
import { productsUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import ProductCard from "@/components/Cards/ProductCard";
import FlameImage from "@/reusbleComponents/FlameImage";
import { filtersCategoryUrl } from "@/utils/urls";
import FiltersBlock from "../FiltersBlock";
import styles from "../shopAll.module.css";
import ProductCardDesc from "@/components/Cards/ProductCardDesc";

function ProductsListing({ productsData, megaMenuData }) {
  const router = useRouter();
  const { route, query } = router;
  const { slug } = query;
  const isFromShopAll = route === '/shop';
  const { headerConData } = useHeaderData();
  const megaMenuProducts = headerConData?.items
  const megaMenuProductsCat = megaMenuProducts?.filter((e) => {
    return e?.title === 'Firefighting PPE'
  })
  const megaMenuProList = megaMenuProductsCat?.length && megaMenuProductsCat[0]?.child_items.filter((e) => {
    return e?.title === 'Products'
  })
  const megaMenuProductsList = megaMenuProList?.length && megaMenuProList[0]?.child_items;
  const getProductCategoryitem = megaMenuProductsList?.filter((e) => {
    return e?.slug === query?.slug
  })
  const megaMenuClickedProduct = getProductCategoryitem?.length && getProductCategoryitem[0]?.object_id;
  const category = router?.query?.category;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [itemsNumber, setItemsNumbers] = useState(10);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPageNum, setSelectedPageNum] = useState(1);
  const [filteredArray, setFilteredArray] = useState([]);
  const [filtersUrl, setFiltersUrl] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const scrollToTop = typeof window !== 'undefined' && document.getElementById("scrollId");
  const arrowSrc = "/Images/bottomGreyArrow.svg";
  const leftArrowSrc = "/Images/leftGreyArrow.svg";
  const rightArrowSrc = "/Images/rightGreyArrow.svg";
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const numberArr = [10, 20, 30, 40, 50];

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  useEffect(() => {
    const getProductData = async () => {
      const categoryurl = `${productsUrl}?category=${category}`;
      const allProductsUrl = !isFromShopAll ? `${productsUrl}?category=${megaMenuClickedProduct}&per_page=${itemsNumber}&page=${selectedPageNum}` : `${productsUrl}?per_page=${itemsNumber}&page=${selectedPageNum}`
      const url = !isFromShopAll && filteredArray.length ? `${filtersUrl}&product_cat=${slug}&per_page=${itemsNumber}&page=${selectedPageNum}` :
        filteredArray.length
          ? `${filtersUrl}&per_page=${itemsNumber}&page=${selectedPageNum}`
          : category
            ? categoryurl
            : allProductsUrl;
      const { data, error, headers } = await handleServerSideProps(url);
      const totalNoOfPages = headers["x-wp-totalpages"];
      setProducts(data);
      setTotalPages(totalNoOfPages);
    };
    getProductData();
  }, [itemsNumber, selectedPageNum, filteredArray, megaMenuClickedProduct]);

  const handleBottomBtn = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBottomBtn2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const handleNoOfProducts = (number) => {
    setItemsNumbers(number);
    setSelectedPageNum(1);
    setShowDropdown(false);
    setShowDropdown2(false);
    scrollToTop.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageSelection = (number) => {
    if (number === "left") {
      if (selectedPageNum === 1) {
        return;
      }
      setSelectedPageNum(selectedPageNum - 1);
      return;
    }
    if (number === "right") {
      if (selectedPageNum == totalPages) {
        return;
      }
      setSelectedPageNum(selectedPageNum + 1);
      return;
    }
    scrollToTop.scrollIntoView({ behavior: "smooth" });
    setSelectedPageNum(number);
  };

  const getFilteredProducts = (data) => {
    setItemsNumbers(10);
    setSelectedPageNum(1);
    setFilteredArray(data);
    let arr = [];
    data.map((e) => {
      const existingIndex = arr.findIndex((item) =>
        item.startsWith(`${e?.taxonomy}=`)
      );
      if (existingIndex !== -1) {
        arr[existingIndex] += `,${e.term_id}`;
      } else {
        arr.push(`${e?.taxonomy}=${e.term_id}`);
      }
    });
    const url =
      arr.length >= 1 ? arr.join("&") : arr.length === 1 ? arr[0] : "";
    const completeUrl = `${filtersCategoryUrl}?${url}`;
    // setFiltersUrl((prevFiltersUrl) => {
    //   const url =
    //     arr.length >= 1 ? arr.join("&") : arr.length === 1 ? arr[0] : "";
    //   return `${filtersCategoryUrl}?${url}&per_page=${itemsNumber}&page=${selectedPageNum}`;
    // });
    setFiltersUrl(completeUrl);
  };

  return (
    <section className={styles.listingPage}>
      <FiltersBlock
        getFilteredProducts={getFilteredProducts}
        products={products}
        setItemsNumbers={setItemsNumbers}
        setSelectedPageNum={setSelectedPageNum}

      />
      <section className={styles.productsCont}>
        <section className={styles.pagesCont}>
          <section
            className={styles.showBlock}
            onClick={handleBottomBtn}
            role="button"
            tabIndex="0"
            id="scrollId"
          >
            <section className={styles.showText}>
              <p className={styles.show}>Show:</p>
              <p className={styles.itemNum}>{itemsNumber}</p>
            </section>
            <section className={styles.downArrow}>
              <FlameImage src={arrowSrc} alt="icon" />
            </section>
            {showDropdown && (
              <section className={styles.dropDown}>
                {numberArr.map((e, index) => {
                  return (
                    <section
                      key={index}
                      className={styles.showItems}
                      onClick={() => {
                        handleNoOfProducts(e);
                      }}
                    >
                      {e} items
                    </section>
                  );
                })}
              </section>
            )}
          </section>
          <section className={styles.pageNumCont}>
            {totalPages != 1 && (
              <section
                className={styles.arrows}
                onClick={() => {
                  handlePageSelection("left");
                }}
              >
                <FlameImage src={leftArrowSrc} alt="icon" />
              </section>
            )}
            {pageNumbers?.map((num, index) => {
              return (
                <section
                  key={index}
                  className={
                    selectedPageNum === index + 1
                      ? styles.pageNumHighlighted
                      : styles.pageNum
                  }
                >
                  <span
                    className={styles.numText}
                    key={index}
                    onClick={() => {
                      handlePageSelection(num);
                    }}
                  >
                    {num}
                  </span>
                </section>
              );
            })}
            {selectedPageNum != totalPages && (
              <section
                className={styles.arrows}
                onClick={() => {
                  handlePageSelection("right");
                }}
              >
                <FlameImage src={rightArrowSrc} alt="icon" />
              </section>
            )}
          </section>
        </section>
        <section className={styles.products}>
          {products?.map((product, index) => {
            return product?.type === "add_block" ? <ProductCardDesc product={product} /> : <ProductCard key={index} product={product} />;
          })}
        </section>
        <section className={styles.pagesCont}>
          <section className={styles.showBlock} onClick={handleBottomBtn2}>
            <section className={styles.showText}>
              <p className={styles.show}>Show:</p>
              <p className={styles.itemNum}>{itemsNumber}</p>
            </section>
            <section className={styles.downArrow}>
              <FlameImage src={arrowSrc} alt="icon" />
            </section>
            {showDropdown2 && (
              <section className={styles.dropDown}>
                {numberArr.map((e, index) => {
                  return (
                    <section
                      key={index}
                      className={styles.showItems}
                      onClick={() => {
                        handleNoOfProducts(e);
                      }}
                    >
                      {e} items
                    </section>
                  );
                })}
              </section>
            )}
          </section>
          <section className={styles.pageNumCont}>
            {totalPages != 1 && (
              <section
                className={styles.arrows}
                onClick={() => {
                  handlePageSelection("left");
                }}
              >
                <FlameImage src={leftArrowSrc} alt="icon" />
              </section>
            )}
            {pageNumbers?.map((num, index) => {
              return (
                <section
                  key={index}
                  className={
                    selectedPageNum === index + 1
                      ? styles.pageNumHighlighted
                      : styles.pageNum
                  }
                >
                  <span
                    className={styles.numText}
                    key={index}
                    onClick={() => {
                      handlePageSelection(num);
                    }}
                  >
                    {num}
                  </span>
                </section>
              );
            })}
            {selectedPageNum != totalPages && (
              <section
                className={styles.arrows}
                onClick={() => {
                  handlePageSelection("right");
                }}
              >
                <FlameImage src={rightArrowSrc} alt="icon" />
              </section>
            )}
          </section>
        </section>
      </section>
    </section>
  );
}
export default ProductsListing;
