import React from "react";
// import { useTranslation } from "react-i18next";

function Landmark() {
  // const { t } = useTranslation(["landmark"]);
  return (
    <section id="seeAbout" className="border-b py-5 h-full bg-gray-50">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 gap-x-5">
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-x-5">
          <div>
            <img
              src="/images/gallary/1.jpg"
              className="w-full rounded-lg m-2"
              alt=""
            />
            <h1>বীর মুক্তিযোদ্ধা আলহাজ্ব মুহাম্মদ গিয়াসউদ্দিন</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Institude Heads' Speech</h1>
            <hr />
            <p className="text-sm text-justify mt-2">
              আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহ্! সকল প্রশংসা আল্লাহ পাকের জন্য ।
              এই মহাবিশ্বের সবকিছু সুশৃঙ্খল ও সুনিয়ন্ত্রিত, কিন্তু মনুষ্য সমাজেই
              যত নৈরাজ্য ও অরাজকতা বিদ্যমান । এর কারন একটাই, মহান স্রষ্টা ও
              প্রতিপালকের প্রদত্ত বিধি বিধান অন্য সব ক্ষেত্রে কার্যকরী হলেও
              মানুষের সমাজে তা উপেক্ষিত । আমরা ঐশ্বরিক বিধান তথা আল্ কোরআনের
              শিক্ষার বাহিরে ভিন্ন মত ও পথের মধ্যে সুখ-শান্তির অম্বেষণে ব্যস্ত ।
              আমরা তাই প্রচলিত শিক্ষার সাথে পবিত্র কোরআন এবং হাদিসের শিক্ষার
              সমন্বয় ঘটিয়ে শিক্ষার্থীদের সুশিক্ষায় শিক্ষিত করে চরিত্রবান ও
              আদর্শবান আলোকিত মানুষ হিসাবে গড়ে তুলতে চাই । যাতে তারা ইহকাল এবং
              পরকালীন কল্যান লাভ করার কাজে মনোযোগী হতে পারে ।
            </p>
            <div>
              <button
                type=""
                className="p-3 rounded-md mt-2 bg-[#20702e] text-white"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="text-black p-6 md:text-xl">
          <p className="font-bold text-xl font-mono text-left">About Us</p>
          <h1 className="font-bold text-[40px] font-sans text-left leading-10 mb-2">
            Bir Muktijoddha Giasuddin Islamic Girls School
          </h1>
          <hr />
          <p className="font-normal text-[18px] font-sans text-left mt-2">
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
