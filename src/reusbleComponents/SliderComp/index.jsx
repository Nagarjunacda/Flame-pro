import { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import TitleAndTextCard from '@/components/Cards/TitleAndTextCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../../styles/slider.module.css'

function SliderComp({ data, title }) {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isDesktop = useMediaQuery({ query: '(min-width:900px)' });
    const slidesToShow = 3

    const settings = {
        dots: isDesktop ? false : true,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktop ? slidesToShow : 1,
        slidesToScroll: 1,
        customPaging: (i) => (
            <span
                className={`${styles['custom-dot']} ${i === currentSlide ? styles.active : ''
                    }`}
                onClick={() => sliderRef.current.slickGoTo(i)}
            ></span>
        ),
        beforeChange: (current, next) => setCurrentSlide(next),
    }

    const getCardBlock = (item) => {
        switch (title) {
            case 'Resource Hub':
                return <TitleAndTextCard data={item} />
        }
    }
    return <section className={styles.sliderCont}>
        <Slider ref={sliderRef} {...settings} >
            {data.map((item, index) => {
                return getCardBlock(item)
            })}
        </Slider></section>
}
export default SliderComp