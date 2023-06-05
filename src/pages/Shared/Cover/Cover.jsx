import React from 'react';
import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 20 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero md:h-[600px] relative"
        // style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content w-8/12 mx-auto shadow-2xl border border-black p-6 md:absolute top-60 left-52 bg-black bg-opacity-40">
          <div className="max-w-md py-4">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;