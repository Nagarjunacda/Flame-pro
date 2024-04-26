import { useContext } from "react";
import { useRouter } from "next/router";
import { useProductCatData } from "@/context/ProductCatContext";
import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import BasketMweb from "@/components/Header/BasketMweb";
import SearchMweb from "@/components/Header/SearchMweb";
import BlogCard from "@/components/Cards/BlogCard";
import { useMediaQuery } from "react-responsive";
import Search from "@/components/Search";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";
import styles from "./fireFighterppe.module.css";
import { head } from "lodash";

function FireFighterppe({
  selectedNavItem,
  handleOverlayClose,
  isSearchLoading,
  setIsSearchLoading,
  getSearchData,
  postsData,
}) {
  const { setProductCatData } = useProductCatData();
  const router = useRouter();
  const heading = selectedNavItem?.title;
  const childItems = selectedNavItem?.child_items;
  const isFireFighting = selectedNavItem?.title === "Firefighting PPE";
  const isDefencePro = selectedNavItem?.title === "Defence Procurement";
  const isSearch = selectedNavItem?.title === "Search";
  const backArrow = "/Images/backArrow.svg";
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width:1280px)" });
  const fireFightingCards = isLargeScreen ? ["item", "item"] : ["item"];
  const nonFireFightingCards = isDesktop ? ["item", "item", "item"] : ["item"];
  const blogCardArr = isFireFighting ? fireFightingCards : nonFireFightingCards;
  const fireFightingLarge = (
    postsData &&
    postsData.filter((e) => {
      return e?.post_type_cat?.length && e?.post_type_cat[0]?.name === "Fire";
    })
  )?.slice(0, 2);
  const fireFightingSmall = (
    postsData &&
    postsData.filter((e) => {
      return e?.post_type_cat?.length && e?.post_type_cat[0]?.name === "Fire";
    })
  )?.slice(0, 1);
  const FireFightingData = isLargeScreen
    ? fireFightingLarge
    : fireFightingSmall;
  const DefenceProcData = isDesktop
    ? (
      postsData &&
      postsData.filter((e) => {
        return (
          e?.post_type_cat?.length && e?.post_type_cat[0]?.name === "Defence"
        );
      })
    )?.slice(0, 3)
    : (
      postsData &&
      postsData.filter((e) => {
        return (
          e?.post_type_cat?.length && e?.post_type_cat[0]?.name === "Defence"
        );
      })
    )?.slice(0, 1);
  const resourceHubData = isDesktop
    ? postsData && postsData?.slice(0, 3)
    : postsData && postsData?.slice(0, 1);
  const FinalData =
    selectedNavItem?.title === "Firefighting PPE"
      ? FireFightingData
      : selectedNavItem?.title === "Defence Procurement"
        ? DefenceProcData
        : resourceHubData;

  const linkStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const handleHeadingClick = () => {
    const routeUrl = selectedNavItem?.slug;
    router.push(`/${routeUrl}`);
    handleOverlayClose();
  };

  const handleLabelClick = (item) => {
    handleOverlayClose("item");
    setProductCatData(item);
  };

  return (
    <section className={styles.container}>
      {isSearch && (
        <Search
          getSearchData={getSearchData}
          handleOverlayClose={handleOverlayClose}
        />
      )}
      {!isDesktop && !isSearch && (
        <section className={styles.heading}>
          <section
            className={styles.backButton}
            onClick={() => handleOverlayClose("back")}
          >
            <section className={styles.backIcon}>
              <FlameImage src={backArrow} alt="back" />
            </section>
            <p className={styles.backText}>Back</p>
          </section>
          <p
            className={
              isDefencePro ? styles.headingTextMar : styles.headingText
            }
            onClick={handleHeadingClick}
          >
            {heading}
          </p>
        </section>
      )}
      {!isSearch && (
        <section className={styles.subContainer}>
          <section
            className={
              isFireFighting ? styles.childHeadingPpe : styles.childHeading
            }
          >
            {childItems &&
              childItems.map((item, index) => {
                const url =
                  heading === "Defence Procurement"
                    ? `/${item?.slug}`
                    : heading === "Resource Hub"
                      ? `/resource-hub/${item.slug}` : heading === 'About' ? `/about/${item.slug}`
                        : "#";
                return (
                  <section key={index} className={styles.childCont}>
                    <Link
                      href={url}
                      onClick={(e) => {
                        if (url === "#") {
                          e.preventDefault();
                        } else {
                          handleOverlayClose("item");
                        }
                      }}
                      style={{ cursor: heading === "Defence Procurement" || heading === "Resource Hub" ? 'pointer' : "auto" }}
                    >
                      <section
                        className={
                          isFireFighting && !isDesktop
                            ? styles.subContTitle
                            : null
                        }
                        key={index}
                      >
                        {item?.title}
                      </section>
                    </Link>
                    {item.child_items &&
                      item.child_items.map((childItem, index) => {
                        const url =
                          item?.title === "Products"
                            ? `/shop/${childItem?.slug}`
                            : `/${item.post_name}/${childItem?.slug}`;
                        return (
                          <Link
                            key={index}
                            href={url}
                            className={styles.innerChild}
                          >
                            <section
                              key={index}
                              onClick={() => {
                                handleLabelClick(childItem);
                              }}
                            >
                              {childItem?.title}
                            </section>
                          </Link>
                        );
                      })}
                  </section>
                );
              })}
          </section>
          {!isFireFighting && !isDesktop && <BasketMweb />}
          {!isFireFighting && !isDesktop && <SearchMweb />}
          <section className={styles.blogCard}>
            <section className={styles.blogCardInner}>
              {FinalData.map((e, index) => {
                return (
                  <Link
                    key={index}
                    href={`/resource-hub/${e?.slug}`}
                    onClick={() => {
                      handleOverlayClose("item");
                    }}
                    className={styles.cardAlignment}
                  >
                    <BlogCard category={selectedNavItem?.title} data={e} />
                  </Link>
                );
              })}
            </section>
            <Link
              href={"/resource-hub"}
              style={linkStyle}
              onClick={() => {
                handleOverlayClose("item");
              }}
            >
              <ButtonStyleTwo
                text={"View All Blogs"}
                textColor={"var( --color-primary)"}
              />
            </Link>
          </section>
        </section>
      )}
    </section>
  );
}
export default FireFighterppe;
