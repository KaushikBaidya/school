import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="seeHero"
        className="w-full h-[550px] 3xl:h-[700px] relative overflow-hidden text-white bg-[#f4f4f4]"
      >
        <div className="w-full h-full absolute opacity-0 myAnimation slideShowItem">
          <img
            src="/images/gallary/b3.jpg"
            className="w-full h-full object-cover myImgAnimation"
            alt=""
          />
          <div className="max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[15%] lg:left-0 translate-y-[-50%]  py-10 px-5">
            <h1 className="text-[1.8rem] lg:text-[3.5rem] font-sans font-semibold uppercase pb-4 tracking-wide">
              Online and regular Admission
            </h1>
          </div>
        </div>
        <div className="w-full h-full absolute opacity-0 myAnimation slideShowItem">
          <img
            src="/images/gallary/b2.jpg"
            className="w-full h-full object-cover myImgAnimation"
            alt=""
          />
          <div className="max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[15%] lg:left-0 translate-y-[-50%]  py-10 px-5">
            <h1 className="text-[1.8rem] lg:text-[3.5rem] font-sans font-semibold uppercase pb-4 tracking-wide">
              100% Passing Rate.
            </h1>
          </div>
        </div>

        <div className="w-full h-full absolute opacity-0 myAnimation slideShowItem">
          <img
            src="/images/gallary/b1.jpg"
            className="w-full h-full object-cover myImgAnimation"
            alt=""
          />
          <div className="max-w-[70%] lg:max-w-[50%] absolute top-[50%] left-[15%] lg:left-0 translate-y-[-50%]  py-10 px-5">
            <h1 className="text-[1.8rem] lg:text-[3.5rem] font-sans font-semibold uppercase pb-4 tracking-wide">
              Neat & Clean Campass Area.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
