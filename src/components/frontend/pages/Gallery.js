import React from "react";

const Gallery = () => {
  return (
    <section className="max-w-7xl px-10 lg:mx-auto py-28 ">
      <h1 className="text-center text-4xl text-[#20702E] font-semibold uppercase">
        Photo Gallery
      </h1>
      <div className="overflow-hidden">
        <div className="px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap md:w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/gallary/b1.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/gallary/b2.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/gallary/b3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
