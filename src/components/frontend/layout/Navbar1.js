import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div
        className={
          "fixed top-0 w-full xl:max-w-screen-3xl mx-auto flex flex-wrap items-center justify-around z-10 py-1 " +
          (bgColor
            ? "bg-gray-100 shadow-sm transition duration-200 ease-in"
            : " bg-[#ffffff] backdrop-blur-md lg:bg-[#ffffff58] ")
        }
      >
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <div className="flex justify-center items-center">
              <img src="/images/logo.png" alt="" className="h-12 ml-5" />
              <h1 className="text-[#20702e] font-semibold text-lg lg:text-2xl">
                Bir Muktijoddha Giasuddin Islamic Girls School
              </h1>
            </div>
          </Link>
          <button
            className="text-[#BA344E] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={25} className="mr-3" />
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeHero" onClick={() => setNavbarOpen(!navbarOpen)}>
                HOME
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeAbout" onClick={() => setNavbarOpen(!navbarOpen)}>
                ABOUT
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeCourse" onClick={() => setNavbarOpen(!navbarOpen)}>
                Facilities
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeService" onClick={() => setNavbarOpen(!navbarOpen)}>
                Admission
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeService" onClick={() => setNavbarOpen(!navbarOpen)}>
                Academic
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeService" onClick={() => setNavbarOpen(!navbarOpen)}>
                Administration
              </a>
            </li>

            <li className="px-4 border-transparent border-b-4 hover:border-[#34ba4d] py-2 text-sm font-medium uppercase">
              <a href="#seeContact" onClick={() => setNavbarOpen(!navbarOpen)}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="hidden lg:block h-12 mx-5">
          <p className="font-sans text-red-600 font-semibold">Enquires</p>
          <p className="font-sans">+4407848938273</p>
        </div> */}
      </div>
    </>
  );
}
