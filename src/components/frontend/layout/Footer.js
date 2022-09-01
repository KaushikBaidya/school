import React from "react";
import { FiFacebook, FiTwitter, FiYoutube, FiLinkedin } from "react-icons/fi";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center py-10 bg-white">
        <div className="flex justify-center items-center">
          <img src="/images/logo.png" alt="" className="h-12 ml-5" />
          <h1 className="text-[#20702e] font-semibold text-lg lg:text-2xl">
            Bir Muktijoddha Giasuddin Islamic Girls School
          </h1>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-1 justify-items-center">
            <h1 className="text-[12px] lg:text-[16px] text-[#20702e] font-semibold sm:mt-2 text-center px-5 uppercase">
              stay connected
            </h1>
            <hr className="h-[2px] w-[100px] bg-[#20702e]" />
          </div>
          <div className="w-full flex flex-wrap gap-4 justify-center py-3">
            <div className="w-10 h-10 flex bg-[#20702e] justify-center items-center drop-shadow-xl rounded-lg text-white">
              <FiFacebook size={26} />
            </div>
            <div className="w-10 h-10 flex bg-[#20702e] justify-center items-center drop-shadow-xl rounded-lg text-white">
              <FiTwitter size={26} />
            </div>
            <div className="w-10 h-10 flex bg-[#20702e] justify-center items-center drop-shadow-xl rounded-lg text-white">
              <FiYoutube size={26} />
            </div>
            <div className="w-10 h-10 flex bg-[#20702e] justify-center items-center drop-shadow-xl rounded-lg text-white">
              <FiLinkedin size={26} />
            </div>
          </div>
        </div>
        <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-4 gap-y-2 px-10">
          <div className="grid grid-cols-1 justify-items-start">
            <p className="text-sm lg:text-2xl text-[#20702e] font-semibold font-sans text-left px-5 ">
              UK (Head) Office
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Address:
              <span className="font-normal"> 9 New Road , London , E1 1HE</span>
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Email:
              <span className="font-normal"> info@zajeducation.co.uk</span>
            </p>
            <p className="text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Contact Number
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-normal font-sans text-left px-5 ">
              +4407983241778
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-normal font-sans text-left px-5 ">
              +4407848938273
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-start">
            <p className="text-sm lg:text-2xl text-[#20702e] font-semibold font-sans text-left px-5 ">
              Dhaka divisional office
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Office Address:
              <span className="font-normal">
                {" "}
                H#35/C/4 section1, Sha Alibag, Mirpur 1, Dhaka
              </span>
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Contact Person:
              <span className="font-normal"> Md Mazharul Islam (Sagor)</span>
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Email:
              <span className="font-normal"> sagordu46@gmail.com</span>
            </p>
            <p className="text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Contact Number
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-normal font-sans text-left px-5 ">
              +8801938617243
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-start">
            <p className="text-sm lg:text-2xl text-[#20702e] font-semibold font-sans text-left px-5 ">
              Sylhet Divisional Office
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Office Address:
              <span className="font-normal">
                {" "}
                Jalaliya Apartment, LEVEL 4 (B) Akhaliya , Surma Gate ,
              </span>
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Contact Person:
              <span className="font-normal"> SHUHEL AHMED</span>
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Email:
              <span className="font-normal"> shuhel53935@gmail.com</span>
            </p>
            <p className="text-lg text-[#20702e] font-semibold font-sans text-left px-5 ">
              Contact Number
            </p>
            <p className="text-sm lg:text-lg text-[#20702e] font-normal font-sans text-left px-5 ">
              +8801775171093
            </p>
          </div>
          <div className="flex flex-col text-[#20702e] items-end gap-0 mr-5">
            <p className="text-lg lg:text-2xl font-semibold font-sans">
              Quick Links
            </p>
            <p>
              <a href="#seeHero">Home</a>
            </p>
            <p>
              <a href="#seeAbout">About</a>
            </p>
            <p>
              <a href="#seeCourse">Course</a>
            </p>
            <p>
              <a href="#seeService">Service</a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pb-16 md:pb-0 bg-[#20702e] py-1">
        <p className="text-uppercase font-bold text-gray-200">
          ©{new Date().getFullYear()}
          <span className="ml-2">
            ZAJ EDUCATION GROUP LTD All rights reserved
          </span>
        </p>
        <p className="text-uppercase text-gray-200">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
