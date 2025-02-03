import React from "react";
import "animate.css";
import Image from "next/image";

function Blocks() {
  return (
    <div>
      <div className="flex justify-center mt-2 animate__animated animate__backInRight animate__delay-2s">
        <div className="blog-big"></div>
      </div>
      <div className="flex justify-center gap-7 mt-4 animate__animated animate__backInLeft animate__delay-1s">
        <div className="small-box"></div>
        <div className="small-box"></div>
      </div>
      <div className="flex justify-center mt-4 animate__animated animate__backInRight animate__delay-7s">
        <div className="blog-big"></div>
      </div>
      <div className="flex justify-center mt-4 animate__animated animate__backInLeft animate__delay-10s">
        <div className="blog-big"></div>
      </div>
      <div className="flex justify-center mt-3 animate__animated animate__backInRight animate__delay-10s">
        <div className="blog-big"></div>
      </div>
    </div>
  );
}

export default Blocks;
