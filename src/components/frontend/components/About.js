import React from "react";
// import { useTranslation } from "react-i18next";
import { BsShieldCheck } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { HiOutlineLibrary } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
// import { IconBase } from "react-icons";

function Landmark() {
  // const { t } = useTranslation(["landmark"]);
  const data = [
    {
      id: "0",
      icon: BsShieldCheck,
      title: "Saftey first",
      details: "We provide best safety procedures for our students.",
    },
    {
      id: "1",
      icon: GoBook,
      title: "Regular Classes",
      details: "We provide best safety procedures for our students.",
    },
    {
      id: "2",
      icon: HiOutlineLibrary,
      title: "Certified Teachers",
      details:
        "We provide best safety procedures for our students.We provide best safety procedures for our students.",
    },
    {
      id: "3",
      icon: TbCertificate,
      title: "Sufficient Classrooms",
      details: "We provide best safety procedures for our students.",
    },
    {
      id: "4",
      icon: AiOutlineDeploymentUnit,
      title: "Creative Lessons",
      details: "We provide best safety procedures for our students.",
    },
  ];
  return (
    <section id="seeAbout" className="border-b py-5 h-full bg-gray-50">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 gap-x-5">
        <div className="grid grid-cols-1 mt-6 px-5">
          <div>
            <h1 className="text-left text-2xl">What we Offer</h1>
            <p className="text-lg text-gray-500">
              We are offering various facilities to our precious students for
              them to grow more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {data.map((item) => (
              <div key={item.id} className="py-3 flex justify-around gap-x-2">
                <div className="w-20 h-20 bg-[#4BB833] flex items-center rounded-full">
                  <item.icon size={25} className="mx-auto text-white" />
                </div>
                <div className="w-40">
                  <h1 className="text-gray-800 font-semibold text-lg">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-black p-6 md:text-xl">
          <p className="font-bold text-xl font-mono text-left">Welcome To</p>
          <h1 className="font-bold text-[36px] font-sans text-left leading-10 mb-2">
            Bir Muktijoddha Giasuddin Islamic Girls School
          </h1>
          <hr />
          <p className="font-normal text-[18px] text-gray-500 font-sans text-left mt-2">
            Bir Muktijoddha Giasuddin Islamic Girls School are committed to
            provide intellectual, social, cultural and economic benefits to
            communities through programs of education, co-curriculum activities,
            research and scholarships. Our schools & colleges are delivering
            world class education and research in the national education system
            of Bangladesh. Moreover, it has been involved in the next practice
            in the form of world citizenship education and makes an innovative
            and creative system for smart and enlightened generation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landmark;
