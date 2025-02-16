import React from "react";
import "animate.css";

function Blocks() {
  return (
    <div>
      <div className="flex justify-center mt-2 animate__animated animate__backInRight animate__delay-2s">
        <div className="blog-big w-full max-w-[830px]"></div>
      </div>
      <div className="flex justify-center gap-4 mt-4 animate__animated animate__backInLeft animate__delay-1s flex-wrap">
        <div className="small-box w-full sm:w-[400px] lg:w-[600px] xl:w-[830px]"></div>
        <div className="small-box w-full sm:w-[400px] lg:w-[600px] xl:w-[830px]"></div>
      </div>
      <div className="flex justify-center mt-4 animate__animated animate__backInRight animate__delay-7s">
        <div className="blog-big w-full max-w-[830px]"></div>
      </div>
      <div className="flex justify-center mt-4 animate__animated animate__backInLeft animate__delay-10s">
        <div className="blog-big w-full max-w-[830px]"></div>
      </div>
      <div className="flex justify-center mt-3 animate__animated animate__backInRight animate__delay-10s">
        <div className="blog-big w-full max-w-[830px]"></div>
      </div>
    </div>
  );
}

export default Blocks;
