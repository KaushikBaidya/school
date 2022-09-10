import React from "react";

const Teachers = () => {
  const data = [
    {
      id: "0",
      img: "/images/teacher/t1.jpg",
      title: "English Teacher",
      name: "Ms. Linda",
    },
    {
      id: "1",
      img: "/images/teacher/t1.jpg",
      title: "English Teacher",
      name: "Ms. Linda",
    },
    {
      id: "2",
      img: "/images/teacher/t1.jpg",
      title: "English Teacher",
      name: "Ms. Linda",
    },
    {
      id: "3",
      img: "/images/teacher/t1.jpg",
      title: "English Teacher",
      name: "Ms. Linda",
    },
  ];
  return (
    <div className="lg:px-24 grid gap-y-5 py-5">
      <div className="grid place-content-center mt-10">
        <h1 className="text-[24px] text-slate-600 font-bold sm:mt-4 lg:text-[36px] text-center px-5 uppercase tracking-wider">
          Certified Teachers
        </h1>
        <h3 className="max-w-[600px] text-[18px] text-slate-500 font-normal sm:mt-4 text-center px-5 uppercase tracking-wider">
          We greatlly care about our precious students. So we always try to
          povide best teachers available.
        </h3>
      </div>
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col items-center max-w-lg mx-auto rounded-lg hover:shadow-md px-2 pb-8 mt-2"
          >
            <img
              className="w-72 rounded mx-auto m-3"
              src={item.img}
              alt="teacher"
            />
            <h1 className="font-medium text-center text-xl leading-none p-2">
              {item.name}
            </h1>
            <h1 className="font-medium text-center text-lg leading-none p-2">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
