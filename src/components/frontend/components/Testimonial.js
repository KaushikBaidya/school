// import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const Testimonial = () => {
  const data = [
    {
      id: "1",
      img: "/images/teacher/t1.jpg",
      name: "Rebeca Jones",
      relation: "Mother",
      quote:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "2",
      img: "/images/teacher/t1.jpg",
      name: "Kyle Rodrigez",
      relation: "Mother",
      quote:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "3",
      img: "/images/teacher/t1.jpg",
      name: "Jenefer",
      relation: "Mother",
      quote:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
  ];
  // console.log(data);
  return (
    <section>
      <div className="w-full grid grid-cols-1 justify-items-center content-center my-14">
        <h2 className="text-[24px] text-slate-600 font-bold sm:mt-4 lg:text-[36px] text-center px-5 uppercase tracking-wider">
          Testimonials
        </h2>
        {/* <FaQuoteRight className="text-3xl text-[#0852C9] font-bold my-3" /> */}
        <h3 className="max-w-[600px] text-[18px] text-slate-500 font-normal sm:mt-4 text-center px-5 uppercase tracking-wider">
          What parents says about us.
        </h3>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-[250px] md:w-[500px] lg:w-[1000px] flex flex-col items-center mx-auto my-5">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden m-3">
                      <img src={item.img} className="" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-center text-gray-800 font-bold my-3 mx-5">
                        {item.name}
                      </h3>
                      <p className="text-base text-gray-700 text-center my-3 mx-2">
                        {item.relation}
                      </p>
                      <p className="text-base lg:text-lg text-gray-700 text-center my-3 mx-2">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
