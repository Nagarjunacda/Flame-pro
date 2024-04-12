import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import BasketMweb from "@/components/Header/BasketMweb";
import SearchMweb from "@/components/Header/SearchMweb";
import BlogCard from "@/components/Cards/BlogCard";
import { useMediaQuery } from "react-responsive";
import styles from "./fireFighterppe.module.css";
import Search from "@/components/Search";
import ButtonStyleTwo from "@/reusbleComponents/ButtonStyleTwo";

function FireFighterppe({ selectedNavItem, handleOverlayClose }) {
  const heading = selectedNavItem?.title;
  const childItems = selectedNavItem?.child_items;
  const isFireFighting = selectedNavItem?.title === "Firefighting PPE";
  const isDefencePro = selectedNavItem?.title === "Defence Procurement";
  const backArrow = "/Images/backArrow.svg";
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width:1280px)" });
  const fireFightingCards = isLargeScreen ? ["item", "item"] : ["item"];
  const nonFireFightingCards = isDesktop ? ["item", "item", "item"] : ["item"];
  const blogCardArr = isFireFighting ? fireFightingCards : nonFireFightingCards;

  return (
    <section className={styles.container}>
      <Search />
      {/* {!isDesktop && (
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
        >
          {heading}
        </p>
      </section>
      )}
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
                  ? `/${item?.slug}?category=${item?.object_id}`
                  : heading === "Resource Hub"
                    ? "/resource-hub/the-importance-of-fr-base-layers/3480"
                    : "#";
              return (
                <section key={index} className={styles.childCont}>
                  <Link
                    href={url}
                    onClick={() => {
                      handleOverlayClose("item");
                    }}
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
                          ? `/shop-all/${childItem?.slug}?category=${childItem?.object_id}`
                          : `/${childItem?.slug}?category=${childItem?.object_id}`;
                      return (
                        <Link
                          key={index}
                          href={url}
                          className={styles.innerChild}
                        >
                          <section
                            key={index}
                            onClick={() => {
                              handleOverlayClose("item");
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
            {blogCardArr.map((e, index) => {
              return (
                <Link
                  key={index}
                  href={"/resource-hub/the-importance-of-fr-base-layers/3480"}
                  onClick={() => {
                    handleOverlayClose("item");
                  }}
                >
                  <BlogCard />
                </Link>
              );
            })}
          </section>
          <ButtonStyleTwo
            text={"View All Blogs"}
            textColor={"var( --color-primary)"}
          />
        </section>
      </section> */}
    </section>
  );
}
export default FireFighterppe;
