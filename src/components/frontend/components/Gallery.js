import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const Gallery = () => {
  const data = [
    {
      id: "1",
      img: "/images/gallary/a1.jpg",
    },
    {
      id: "2",
      img: "/images/gallary/a2.jpg",
    },
    {
      id: "3",
      img: "/images/gallary/a3.jpg",
    },
    {
      id: "4",
      img: "/images/gallary/a4.jpg",
    },
    {
      id: "5",
      img: "/images/gallary/a1.jpg",
    },
  ];

  return (
    <>
      <section className="border-b min-h-full py-5">
        <div className="h-full grid grid-cols-1 content-center pb-10">
          <div className="max-w-2xl mx-auto py-5">
            <h2 className="text-[24px] text-slate-600 font-bold sm:mt-4 lg:text-[36px] text-center px-5 uppercase tracking-wider">
              See Our Photo Gallery
            </h2>
          </div>
          <div className="py-2">
            <div className="max-w-[1500px] mx-auto px-10">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img className="w-full px-5 h-50" src={item.img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
