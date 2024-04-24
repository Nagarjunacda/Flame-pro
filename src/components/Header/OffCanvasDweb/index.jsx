import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Scrollbar } from 'smooth-scrollbar-react';
import Offcanvas from "react-bootstrap/Offcanvas";
import FlameImage from "@/reusbleComponents/FlameImage";
import FireFighterppe from "@/components/ContentBlocks/FireFighterppe";
import HeaderDweb from "../HeaderDweb";
import styles from "../header.module.css";

function OffCanvasDweb({ show, handleClose, headerData, selectedNavItem, postsData }) {
  const router = useRouter();
  const [clickedItem, setClickedItem] = useState({});
  const [searchData, setSearchData] = useState([]);
  const navItems = headerData?.items;
  const flameLogo = "/Images/flameLogoDark.svg";
  const searchIcon = "/Images/searchIcon.svg";
  const basketIcon = "/Images/basketIcon.svg";
  const [isOverlayCanvasOpen, setIsOverlayCanvasOpen] = useState(false);

  const handleOverlayClose = () => {
    setIsOverlayCanvasOpen(false);
    handleClose();
  };

  const getSearchData = (data) => {
    setSearchData(data);
  }

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
      if (item?.title === 'Search') {
        setSearchData([]);
        handleOverlayClose();
        return
      }
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
      className={searchData?.length ? styles.offCanvasContDwebSearchRes :
        clickedItem?.title === 'Search' ? styles.offCanvasContDwebSearch : styles.offCanvasContDweb}
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
      {/* <Scrollbars
        thumbSize={200}
        renderTrackVertical={props => <div {...props} style={{ backgroundColor: 'white', width: 8, right: 0, bottom: 0, top: 0, position: 'absolute', borderRadius: 4 }} />}
        renderThumbVertical={props => <div {...props} style={{ backgroundColor: 'black', width: 8, right: 0, bottom: 0, top: 0, position: 'absolute', borderRadius: 4 }} />}> */}
      <Scrollbar
        alwaysShowTracks={true}
        damping={0.1}
        plugins={{
          overscroll: {
            effect: 'bounce',
          },
        }}>
        <Offcanvas.Body className={styles.offCanvasBody}>
          <FireFighterppe
            postsData={postsData}
            getSearchData={getSearchData}
            selectedNavItem={clickedItem}
            handleOverlayClose={handleOverlayClose}
          />
        </Offcanvas.Body>
      </Scrollbar>
      {/* </Scrollbars> */}
    </Offcanvas>
  );
}
export default OffCanvasDweb;
