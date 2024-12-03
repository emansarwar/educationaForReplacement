import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// Import images
import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    // <section  className="flex flex-col justify-center mb-20">
    <section className="mx-auto mb-20 text-center">
      <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}></SectionTitle>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        loop={true}
        navigation={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 column for mobile devices
          },
          768: {
            slidesPerView: 2, // 2 columns for tablets
          },
          1024: {
            slidesPerView: 3, // 3 columns for laptops
          },
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className="w-full mySwiper"
      >
        <SwiperSlide className="flex justify-center">
          <img className="inline-block rounded-2xl w-[350px] h-[350px]" src={slideImg1} alt="image" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img className="inline-block rounded-2xl w-[350px] h-[350px]" src={slideImg2} alt="" />
          <h3 className="-mt-16 text-4xl text-white uppercase">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img className="inline-block rounded-2xl w-[350px] h-[350px]" src={slideImg3} alt="" />
          <h3 className="-mt-16 text-4xl text-white uppercase">Soup</h3>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img className="inline-block rounded-2xl w-[350px] h-[350px]" src={slideImg4} alt="" />
          <h3 className="-mt-16 text-4xl text-white uppercase">Dessert</h3>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img className="inline-block rounded-2xl w-[350px] h-[350px]" src={slideImg5} alt="" />
          <h3 className="-mt-16 text-4xl text-white uppercase">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
