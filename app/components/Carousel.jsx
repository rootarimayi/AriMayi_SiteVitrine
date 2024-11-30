"use client"
import Image from "next/image";
import { useState } from "react";

export default function Carousel({slider}) {
 let [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % slider.length);
  };

  const prevSlide= () => {
    setCurrent((prevIndex) => (prevIndex - 1 + slider.length) % slider.length);
  };

  return (
    <div className=" carousel overflow-hidden relative ">
      <div
        className={`slides-container flex transition ease-out duration-40  `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slider.map((s, i) => {
          return (
            <Image
              src={s}
              key={`image-${i + 1}`}
              alt={`image-${i + 1}`}
              className="object-fill"
            />
          );
        })}
      </div>
      <div className="navigationIcons absolute top-[40%] w-full flex justify-between text-white px-[10px]">
        <button
          className="arrowLeft text-white bg-orange p-[7px] rounded-full"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.884 6.116a1.25 1.25 0 0 0-1.768 0l-5 5a1.25 1.25 0 0 0 0 1.768l5 5a1.25 1.25 0 0 0 1.768-1.768L9.018 13.25H18a1.25 1.25 0 1 0 0-2.5H9.018l2.866-2.866a1.25 1.25 0 0 0 0-1.768"
            />
          </svg>
        </button>
        <button
          className="arrowRight bg-orange p-[7px] rounded-full"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.884 6.116a1.25 1.25 0 0 0-1.768 1.768l2.866 2.866H6a1.25 1.25 0 1 0 0 2.5h8.982l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768l5-5a1.25 1.25 0 0 0 0-1.768z"
            />
          </svg>
        </button>
      </div>

      <div className="slider-buttons flex justify-center gap-2 py-[20px]">
        {slider.map((s, i) => {
          return (
            <div key={"btn" + i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=".5em"
                height=".5em"
                viewBox="0 0 24 24"
                className={`cursor-pointer ${
                  i === current ? "scale-150 " : "scale-100"
                }`}
                onClick={() => setCurrent(i)}
              >
                <path
                  fill="currentColor"
                  d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2"
                  className={`${
                    i === current ? "fill-orange" : "fill-[#D9D9D9]"
                  }`}
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
  

}

