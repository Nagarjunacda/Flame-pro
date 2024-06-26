import { useRef, useState } from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TitleAndTextCard from '@/components/Cards/TitleAndTextCard'
import CaseStudyCard from '@/components/Cards/CaseStudyCard'
import TestimonialCard from "@/components/Cards/TestimonialCard";
import FourCategoryCard from '@/components/Cards/FourCategoryCard'
import styles from '../../styles/slider.module.css'

function SliderComp({ data, title, slidesToShow }) {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const hideDotsArr = ['testimonial']
    const isDotsHidden = hideDotsArr.includes(title)
    const noSlidesToShow = slidesToShow;

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
                return <Link href='/resource-hub'><TitleAndTextCard data={item} /></Link>;
            case "testimonial":
                return <TestimonialCard data={item} />;
            case 'Case Studies':
                return <Link href='/case-studies'><CaseStudyCard data={item} /></Link>
            case 'four_category_blocks':
                return <FourCategoryCard data={item} />
        }
    };
    return (
        <section className={styles.sliderCont}>
            <Slider ref={sliderRef} {...settings}>
                {data?.map((item, index) => {
                    return (
                        <section key={index} className={isDesktop ? styles.slideWrapper : styles.slideWrapperMweb}>
                            {getCardBlock(item)}
                        </section>
                    );
                })}
            </Slider>
        </section>
    );
}
export default SliderComp;
