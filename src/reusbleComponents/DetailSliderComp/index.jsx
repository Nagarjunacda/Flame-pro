import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FourCategoryCard from '@/components/Cards/FourCategoryCard'
import { useMediaQuery } from 'react-responsive'
import styles from '../../styles/defaultSlider.module.css'

function DetailSliderComp({ data, setSelectedImage }) {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selImgIndex, setSelImgIndex] = useState(0)
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });

    const handleItemClick = (item, index) => {
        const imageSelected = item?.src;
        setSelectedImage(imageSelected);
        setSelImgIndex(index);
    }

    const handleNextBtn = () => {
        sliderRef.current.slickNext()
    }

    const handlePrevBtn = () => {
        sliderRef.current.slickPrev()
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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

    return (
        <section className={styles.sliderCont}>
            <button
                onClick={handlePrevBtn}
                className={styles.button}
            >
                <img src="/Images/leftGreyArrow.svg" alt="prev" />
            </button>
            <section className={styles.sliderImg}>
                <Slider ref={sliderRef} {...settings}>
                    {data?.map((item, index) => {
                        return (
                            <section key={index} className={styles.slideWrapper} onClick={() => { handleItemClick(item, index) }}>
                                <section className={index === selImgIndex ? styles.selectedImgCont : styles.imageCont}>
                                    <FourCategoryCard data={item} blockTitle />
                                </section>
                            </section>
                        );
                    })}
                </Slider>
            </section>
            <button
                onClick={handleNextBtn}
                className={styles.button}
            >
                <img src="/Images/rightGreyArrow.svg" alt="next" />
            </button>
        </section>
    );
}
export default DetailSliderComp;
