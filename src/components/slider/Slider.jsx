import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/2Kwz2sn/wallpaperflare-com-wallpaper-3-1.jpg"
              alt=""
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,.4)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/1zYXqZS/vw-camper-1939343-960-720-1-1.jpg"
              alt=""
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,.4)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/vkW6BFk/hanson-lu-Avc2-Ai-E1-Q-unsplash-2.jpg"
              alt=""
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,.4)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/fkc6XYj/pexels-pixabay-210010-1-1.jpg"
              alt=""
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,.4)]"></div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            src="https://i.ibb.co/vkW6BFk/hanson-lu-Avc2-Ai-E1-Q-unsplash-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2Kwz2sn/wallpaperflare-com-wallpaper-3-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/fkc6XYj/pexels-pixabay-210010-1-1.jpg"
            alt=""
          />
        </SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
