import React from "react";
import dataBlogs from "../../../data/dataBlogs";

const News = () => {
  return (
    <div className="max-w-6xl flex flex-col items-center gap-4 px-10 lg:mx-auto py-28 ">
      <h1 className="text-center text-xl lg:text-4xl text-[#20702E] font-semibold uppercase">
        news and events
      </h1>
      <hr className="w-24 h-1 bg-[#EC1B23]" />
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6">
        {dataBlogs.length > 0 &&
          dataBlogs.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col items-center max-w-lg mx-auto rounded-lg hover:shadow-md px-2 pb-8 mt-2"
            >
              <img
                className="w-72 rounded mx-auto m-3"
                src={item.img}
                alt="feature"
              />
              <h1 className="font-bold text-center text-orange leading-none p-2">
                {item.title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;
