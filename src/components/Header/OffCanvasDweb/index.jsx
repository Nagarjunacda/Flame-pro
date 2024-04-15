import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Offcanvas from "react-bootstrap/Offcanvas";
import FlameImage from "@/reusbleComponents/FlameImage";
import FireFighterppe from "@/components/ContentBlocks/FireFighterppe";
import HeaderDweb from "../HeaderDweb";
import styles from "../header.module.css";

function OffCanvasDweb({ show, handleClose, headerData, selectedNavItem }) {
  const router = useRouter();
  const [clickedItem, setClickedItem] = useState({});
  const navItems = headerData?.items;
  const flameLogo = "/Images/flameLogoDark.svg";
  const searchIcon = "/Images/searchIcon.svg";
  const basketIcon = "/Images/basketIcon.svg";
  const [isOverlayCanvasOpen, setIsOverlayCanvasOpen] = useState(false);

  const handleOverlayClose = () => {
    setIsOverlayCanvasOpen(false);
    handleClose();
  };

  useEffect(() => {
    setClickedItem(selectedNavItem);
  }, [selectedNavItem]);

  const getNavItem = (item) => {
    if (item?.title === "Cart") {
      return (
        <section className={styles.searchIcon}>
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
    if (clickedItem?.title === item?.title) {
      router.push(`/${item?.slug}`);
      handleOverlayClose();
      return
    }
    if (item?.title === "Cart") {
      router.push("/basket");
      handleOverlayClose();
      return;
    }
    // if (item?.title === "Search") {
    //   handleOverlayClose();
    //   return;
    // }
    if (item?.title === "About") {
      router.push("/about");
      handleOverlayClose();
      return;
    }
    if (item?.title === "Contact Us") {
      router.push("/contact-us");
      handleOverlayClose();
      return;
    }
    setClickedItem(item);
    // setIsCanvasOpen(true);
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleOverlayClose}
      className={clickedItem?.title === 'Search' ? styles.offCanvasContDwebSearch : styles.offCanvasContDweb}
      placement={"top"}
    >
      <Offcanvas.Header>
        <header className={styles.headerMainDweb}>
          <section className={styles.subHeader}>
            <figure className={styles.headerLogo} onClick={handleOverlayClose}>
              <Link href={"/"}>
                <FlameImage src={flameLogo} alt="flameLogo" />
              </Link>
            </figure>
            <nav className={styles.navItemsDrawer}>
              {navItems?.map((item, index) => {
                return (
                  <nav
                    className={
                      item?.title === clickedItem?.title && styles.navItemBorder
                    }
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
        </header>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.offCanvasBody}>
        <FireFighterppe
          selectedNavItem={clickedItem}
          handleOverlayClose={handleOverlayClose}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default OffCanvasDweb;
