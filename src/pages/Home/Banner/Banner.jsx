import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// Import images
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

import { FreeMode, Navigation, Autoplay } from "swiper/modules";

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        navigation={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className="h-64 md:h-[500px] overflow-hidden"
      >
        <SwiperSlide >
          <img src={img1} alt="" className="object-bottom shadow-lg rounded-lg w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={img2} alt="" className="object-bottom shadow-lg rounded-lg w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={img3} alt="" className="object-bottom shadow-lg rounded-lg w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={img4} alt="" className="object-bottom shadow-lg rounded-lg w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={img5} alt="" className="object-bottom shadow-lg rounded-lg w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={img6} alt="" className="object-bottom shadow-lg rounded-lg w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
