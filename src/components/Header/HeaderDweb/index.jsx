import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import OffCanvasDweb from "../OffCanvasDweb";
import styles from "../header.module.css";

function HeaderDweb({ headerData, isFromDrawer, relativeHeader }) {
  const router = useRouter();
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState({});
  const navItems = headerData?.items;
  const flameLogo =
    isFromDrawer || relativeHeader
      ? "/Images/flameLogoDark.svg"
      : "/Images/flameLogo.svg";
  const searchIcon =
    isFromDrawer || relativeHeader
      ? "/Images/blacksearch.png"
      : "/Images/ic_search_24px.png";
  const basketIcon =
    isFromDrawer || relativeHeader
      ? "/Images/basketIcon.svg"
      : "/Images/basketIconWhite.svg";

  const getNavItem = (item) => {
    if (item?.title === "Cart") {
      return (
        <section
          className={styles.searchIcon}
          onClick={() => {
            router.push("/basket");
          }}
        >
          <FlameImage src={basketIcon} alt="basketIcon" />
        </section>
      );
    }
    if (item?.title === "Search") {
      return (
        <section className={styles.searchIcon}>
          <FlameImage src={searchIcon} alt="searchIcon" />
        </section>
      );
    }
    return item?.title;
  };

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
    if (item?.title === "Cart") {
      return;
    }
    // if (item?.title === "Search") {
    //   return;
    // }
    if (item?.title === "About") {
      router.push("/about");
      return;
    }
    if (item?.title === "Contact Us") {
      router.push("/contact-us");
      return;
    }
    setIsCanvasOpen(true);
  };

  const handleClose = () => {
    setIsCanvasOpen(false);
  };

  return (
    <header
      className={
        relativeHeader ? styles.relativeHeaderMainDweb : styles.headerMainDweb
      }
    >
      <section className={styles.subHeader}>
        <figure className={styles.headerLogo}>
          <Link href={"/"}>
            <FlameImage src={flameLogo} alt="flameLogo" />
          </Link>
        </figure>
        <nav
          className={
            isFromDrawer || relativeHeader
              ? styles.navItemsDrawer
              : styles.navItems
          }
        >
          {navItems?.map((item, index) => {
            return (
              <nav
                key={index}
                onClick={() => {
                  handleNavItemClick(item);
                }}
              >
                {getNavItem(item)}
              </nav>
            );
          })}
        </nav>
      </section>
      <OffCanvasDweb
        show={isCanvasOpen}
        selectedNavItem={selectedNavItem}
        handleClose={handleClose}
        headerData={headerData}
      />
    </header>
  );
}
export default HeaderDweb;
