import React from "react";
import style from "./cards.module.css";

function cards({ image, head, para }) {
  return (
    <div className="flex min-h-10 items-center justify-center m-5 mx-10">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
        <div className="h-[400px] aspect-[3/4]">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="mb-40">
            <h1 className="font-dmserif text-4xl font-bold text-white mt-5">
              {head}
            </h1>
            <p className="mt-20 text-3xl text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100 pt-6">
              {para}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cards;
