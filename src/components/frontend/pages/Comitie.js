import React from "react";

const Comitie = () => {
  const data = [
    {
      id: "0",
      img: "/images/teacher/t1.jpg",
      name: "Ms. Linda",
    },
    {
      id: "1",
      img: "/images/teacher/t1.jpg",
      name: "Ms. Linda",
    },
    {
      id: "2",
      img: "/images/teacher/t1.jpg",
      name: "Ms. Linda",
    },
    {
      id: "3",
      img: "/images/teacher/t1.jpg",
      name: "Ms. Linda",
    },
  ];
  return (
    <div className="max-w-6xl flex flex-col items-center gap-4 px-10 lg:mx-auto py-28 ">
      <h1 className="text-center text-4xl text-[#20702E] font-semibold uppercase">
        Management Comitie
      </h1>
      <hr className="w-24 h-1 bg-[#EC1B23]" />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comitie;
