import React from "react";
import { BsPersonCheck } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { HiOutlineLibrary } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";

const Services = () => {
  return (
    <section className="min-h-full">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white ">
        <div className="bg-blue-400 grid grid-cols-1 content-center justify-items-center w-full h-96 bg-cover gap-y-10 py-7 relative">
          <BsPersonCheck className="h-32 w-32 absolute top-[-18%] text-[#34ba4d] bg-white rounded-full p-5 font-light" />
          <p className="text-center text-2xl">Certified Teachers</p>
          <p className="text-center text-base mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-orange-400 grid grid-cols-1 content-center justify-items-center w-full h-96 bg-cover gap-y-10 py-7 relative">
          <MdCastForEducation className="h-32 w-32 absolute top-[-18%] text-[#34ba4d] bg-white rounded-full p-5 font-light" />
          <p className="text-center text-2xl">Special Education</p>
          <p className="text-center text-base mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-emerald-500 grid grid-cols-1 content-center justify-items-center w-full h-96 bg-cover gap-y-10 py-7 relative">
          <HiOutlineLibrary className="h-32 w-32 absolute top-[-18%] text-[#34ba4d] bg-white rounded-full p-5 font-light" />
          <p className="text-center text-2xl">Book & Library</p>
          <p className="text-center text-base mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-red-400 grid grid-cols-1 content-center justify-items-center w-full h-96 bg-cover gap-y-10 py-7 relative">
          <TbCertificate className="h-32 w-32 absolute top-[-18%] text-[#34ba4d] bg-white rounded-full p-5 font-light" />
          <p className="text-center text-2xl">Certification</p>
          <p className="text-center text-base mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
