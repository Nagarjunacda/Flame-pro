import SliderComp from "@/reusbleComponents/SliderComp";
import Style from "./testimonial.module.css";

function Testimonial({ trayData, testimonialExt }) {
  const testimonialData = trayData?.testimonial_slider;
  return (
    <section className={Style.testimonalMain}>
      <div className={Style.sliderBlock}>
        <div className={Style.unSkew}>
          <SliderComp
            data={testimonialExt}
            title={"testimonial"}
            slidesToShow={1}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
