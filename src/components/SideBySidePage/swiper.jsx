import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AutoHeightSwiper, ImageContainer, Image } from "./styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GigSwiper = ({ images }) => {
  return (
    <AutoHeightSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      pagination={{ type: "fraction" }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      navigation
      loop
    >
      {images.map((image) => (
        <SwiperSlide>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
        </SwiperSlide>
      ))}
    </AutoHeightSwiper>
  );
};

export default GigSwiper;
