import React from "react";
import "animate.css";

function Section() {
  return (
    <div className="mr-6 animate__animated animate__backInLeft animate__delay-1s">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Yılmaz Keskin <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
            Frontend Developer
          </span>
        </h1>

        <p className="mt-7 max-w-full sm:max-w-[25rem] md:max-w-[29rem] lg:max-w-[35rem] text-[0.8125rem] sm:text-base md:text-sm lg:text-base leading-[1.4] font-medium tracking-tight text-[#525252]">
          Frontend Developer with focus on ReactJS library. Worked on several
          personal projects using Javascript, ReactJS, NextJS, Node.JS,
          ExpressJS, TailwindCSS, SCSS, and other technologies with
          Accessibility, Responsive Design, and Mobile-First Approaches being my
          main focus.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-5 mt-5 justify-center sm:justify-start">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm sm:text-base px-5 py-2.5 text-center mb-2 sm:mb-0 w-full sm:w-auto"
          >
            Content
          </button>

          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm sm:text-base px-5 py-2.5 text-center mb-2 sm:mb-0 w-full sm:w-auto"
          >
            Teal to Lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section;
