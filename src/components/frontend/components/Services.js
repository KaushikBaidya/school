import React from "react";
import { BsPersonCheck } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { HiOutlineLibrary } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";

const Services = () => {
  return (
    <section className="min-h-full">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white ">
        <div className="bg-blue-400 grid grid-cols-1 content-center justify-items-center w-full h-40 bg-cover gap-y-10 py-7 relative">
          <div className="h-28 w-28 absolute top-[-40%] text-[#20702E] bg-white rounded-full p-5 font-light flex items-center ">
            <BsPersonCheck size={60} className="mx-auto" />
          </div>
          <p className="text-center text-2xl">Certified Teachers</p>
        </div>
        <div className="bg-orange-400 grid grid-cols-1 content-center justify-items-center w-full h-40 bg-cover gap-y-10 py-7 relative">
          <div className="h-28 w-28 absolute top-[-40%] text-[#20702E] bg-white rounded-full p-5 font-light flex items-center ">
            <MdCastForEducation size={60} className="mx-auto" />
          </div>{" "}
          <p className="text-center text-2xl">Special Education</p>
        </div>
        <div className="bg-emerald-500 grid grid-cols-1 content-center justify-items-center w-full h-40 bg-cover gap-y-10 py-7 relative">
          <div className="h-28 w-28 absolute top-[-40%] text-[#20702E] bg-white rounded-full p-5 font-light flex items-center ">
            <HiOutlineLibrary size={60} className="mx-auto" />
          </div>{" "}
          <p className="text-center text-2xl">Book & Library</p>
        </div>
        <div className="bg-red-400 grid grid-cols-1 content-center justify-items-center w-full h-40 bg-cover gap-y-10 py-7 relative">
          <div className="h-28 w-28 absolute top-[-40%] text-[#20702E] bg-white rounded-full p-5 font-light flex items-center ">
            <TbCertificate size={60} className="mx-auto" />
          </div>{" "}
          <p className="text-center text-2xl">Certification</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
