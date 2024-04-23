import { useRef, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleAndTextCard from "@/components/Cards/TitleAndTextCard";
import CaseStudyCard from "@/components/Cards/CaseStudyCard";
import TestimonialCard from "@/components/Cards/TestimonialCard";
import FourCategoryCard from "@/components/Cards/FourCategoryCard";
import RecentlyViewedCard from "@/components/Cards/RecentlyViewedCard";
import styles from "../../styles/slider.module.css";

function SliderComp({ data, title, slidesToShow }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const hideDotsArr = ["testimonial", "Recently Viewed"];
  const isDotsHidden = hideDotsArr.includes(title);
  const noSlidesToShow = slidesToShow;
  const showArrows = title === "testimonial" || title === 'Recently Viewed';
  const leftArrowSrc = title === "testimonial" ? "/Images/leftRedArrow.svg" : "/Images/leftGreyArrow.svg";
  const rightArrowSrc = title === "testimonial" ? "/Images/rightRedArrow.svg" : "/Images/rightGreyArrow.svg";

  const handleNextBtn = () => {
    sliderRef.current.slickNext();
  }

  const handlePrevBtn = () => {
    sliderRef.current.slickPrev();
  }

  const settings = {
    dots: isDesktop || isDotsHidden ? false : true,
    infinite: false,
    speed: 500,
    slidesToShow: isDesktop ? noSlidesToShow : 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <span
        className={`${styles["custom-dot"]} ${i === currentSlide ? styles.active : ""
          }`}
        onClick={() => sliderRef.current.slickGoTo(i)}
      ></span>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: false,
    nextArrow: false,
  };

  const getCardBlock = (item) => {
    switch (title) {
      case "Resource Hub":
        return (
          <Link href="/resource-hub">
            <TitleAndTextCard data={item} />
          </Link>
        );
      case "testimonial":
        return <TestimonialCard data={item} />;
      case "Case Studies":
        return (
          <Link href={`/resource-hub/case-studies/${item.slug}`}>
            <CaseStudyCard data={item} />
          </Link>
        );
      case "four_category_blocks":
        return <FourCategoryCard data={item} />;
      case "Recently Viewed":
        return <RecentlyViewedCard data={item} />;
    }
  };

  return (
    <section className={styles.sliderCont}>
      {showArrows && <button
        onClick={handlePrevBtn}
        className={title === 'testimonial' ? styles.leftButton : styles.leftButtonRecentPro}
      >
        <img src={leftArrowSrc} alt="prev" />
      </button>}
      <Slider ref={sliderRef} {...settings}>
        {data?.map((item, index) => {
          return (
            <section
              key={index}
              className={
                isDesktop ? styles.slideWrapper : styles.slideWrapperMweb
              }
            >
              {getCardBlock(item)}
            </section>
          );
        })}
      </Slider>
      {showArrows && <button
        onClick={handleNextBtn}
        className={title === 'testimonial' ? styles.rightButton : styles.rightButtonRecentPro}
      >
        <img src={rightArrowSrc} alt="next" />
      </button>}
    </section>
  );
}
export default SliderComp;
