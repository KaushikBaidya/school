import React from "react";
import dataBlogs from "../../../data/dataBlogs";

const Blogs = () => {
  return (
    <div className="lg:px-24 grid gap-y-5 py-5 border-b">
      <div className="grid place-content-center">
        <h1 className="text-[24px] text-slate-600 font-bold sm:mt-4 lg:text-[36px] text-center px-5 uppercase tracking-wider">
          Read News & Blogs
        </h1>
      </div>
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

export default Blogs;
