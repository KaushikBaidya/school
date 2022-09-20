import React from "react";

const Job = () => {
  return (
    <div className="max-w-6xl flex flex-col items-center gap-4 px-10 lg:mx-auto py-28 ">
      <h1 className="text-center text-xl lg:text-4xl text-[#20702E] font-semibold uppercase">
        Job Vacancy
      </h1>
      <hr className="w-24 h-1 bg-[#EC1B23]" />
      <div className="max-w-4xl mx-auto p-5 text-left border-2 border-slate-800 rounded-lg my-5">
        <h3 className="text-xl uppercase text-gray-700">Job Title</h3>
        <p className="text-base text-gray-600">English Teacher</p>
        <h3 className="text-xl uppercase text-gray-700">Vacancy</h3>
        <p className="text-base uppercase text-gray-600">2</p>
        <h3 className="text-xl uppercase text-gray-700">Qualifications</h3>
        <p className="text-base text-gray-600 text-justify">
          At least Bachelor's degree Previous experience. The ability to
          differentiate and deliver conceptual, engaging and inquiry-based
          lessons. Familiarity and experience with collaborative planning and a
          team-teaching approach.
        </p>
      </div>
    </div>
  );
};

export default Job;
