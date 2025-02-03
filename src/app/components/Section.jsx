import React from "react";
import "animate.css";

function Section() {
  return (
    <div className="animate__animated animate__backInLeft animate__delay-1s	1s">
      <div className="container">
        <h1 className="font-bold">
          Yılmaz Keskin <br /> Frontend Developer
        </h1>
        <p>
          Frontend Developer with focus on ReactJS library. worked on several
          personal <br /> projects usingJavascript,
          ReactJS,NextJS,Node.JS,ExpressJS,TailwindCSS,SCSS, <br /> and other
          technologies with Accessibility, Responsive Design and Mobile First
          Approaches being my main focus.
        </p>
        <div className="flex gap-5 mt-3">
          <button>BTN-2</button>
          <button>Btn-1</button>
        </div>
      </div>
    </div>
  );
}

export default Section;
