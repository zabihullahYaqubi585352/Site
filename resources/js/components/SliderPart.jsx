import React, { useState } from "react";
import'./TextStroke.css'
import  framarz from '../../../public/build/assets/testimonials/framarz.jpg'
import mobin from '../../../public/build/assets/testimonials/mobin.jpg'
import  rahmani from '../../../public/build/assets/testimonials/rahmani.jpg'

const SliderPart = () => {
  const SliderContent = [
    {
      url: framarz,
      text: " posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.Aenean non odio porttitor, convallis erat sit amet .",
      name: "Framarz",
      level: "Senior Designer",
    },
    {
      url: mobin,
      text: " facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie,  ipsum ac fringilla.",
      name: "Mobin",
      level: "Senior Designer",
    },
    {
      url: rahmani,
      text: " posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie,  ipsum ac fringilla.",
      name: "Rahmani",
      level: "Senior Designer",
    },
  ];

  const [current, setCurrent] = useState(0);
  const prevSlide = () =>
    setCurrent((current) =>
      current == 0 ? SliderContent.length - 1 : current - 1
    );

  const nextSlide = () =>
    setCurrent((current) =>
      current == SliderContent.length - 1 ? 0 : current + 1
    );

  return (
    <section className=" px-10 py-10 mx-auto  2xl:max-w-[1440px]  xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[800px] sm: max-w-[500px] overflow-x-hidden  ">
      <div className="sm: relative mx-auto mb-[40px] block max-w-[500px] overflow-hidden md:max-w-[800px] lg:mb-[80px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
        <div className="w-[10000px] ">
          <div className="loop-scrool block float-left h-full ">
            <h2 className="   hover:text-[#2baa8d] text-white  text-3xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold flex items-center  uppercase">
              <a
                href=""
                className="inline-flex items-center gap-[8px] outline-0"
              >
                CLIENT'STESTIMONIAL
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                viewBox="0 -960 960 960"
                width="50px"
                fill="#2baa8d"
                className="2xl:w-[130px] 2xl:h-[130px] xl:w-[100px] xl:h-[100px] lg:w-[180px] lg:h-[80px]  "
              >
                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
              </svg>
            </h2>
          </div>
          <div className="loop-scrool block mx-[15px] float-left h-full group ">
            <h2 className="  text-3xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold flex items-center  uppercase">
              <a
                href=""
                className="inline-flex items-center gap-[8px] outline-0 text-transparent text-strokeH1 hover:stroke-[#2baa8d] "
              >
                CLIENT'STESTIMONIAL
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                viewBox="0 -960 960 960"
                width="50px"
                fill="transparent"
                className=" stroke-[#2baa8d] stroke-[10] 2xl:w-[130px] 2xl:h-[130px] xl:w-[100px] xl:h-[100px] lg:w-[180px] lg:h-[80px]  "
              >
                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
              </svg>
            </h2>
          </div>
          <div className="loop-scroll block mx-[15px] float-left h-full">
            <h2 className="  hover:text-[#2baa8d] text-white text-3xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold flex items-center  uppercase">
              <a
                href=""
                className="inline-flex items-center gap-[8px] outline-0"
              >
                CLIENT'STESTIMONIAL
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                viewBox="0 -960 960 960"
                width="50px"
                fill="#2baa8d"
                className="2xl:w-[130px] 2xl:h-[130px] xl:w-[100px] xl:h-[100px] lg:w-[180px] lg:h-[80px]  "
              >
                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
              </svg>
            </h2>
          </div>
          <div className="loop-scrool block mx-[15px] float-left h-full group ">
            <h2 className="  text-3xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold flex items-center  uppercase">
              <a
                href=""
                className="inline-flex items-center gap-[8px] outline-0 text-transparent text-strokeH1 hover:stroke-[#2baa8d] "
              >
                CLIENT'STESTIMONIAL
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                viewBox="0 -960 960 960"
                width="50px"
                fill="transparent"
                className=" stroke-[#2baa8d] stroke-[10] 2xl:w-[130px] 2xl:h-[130px] xl:w-[100px] xl:h-[100px] lg:w-[180px] lg:h-[80px]  "
              >
                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
              </svg>
            </h2>
          </div>
        </div>
      </div>

      <div className=" flex flex-col 2xl:flex-row gap-8 py-20 ">
        <div className="max-w-[1200px] grid grid-cols-3 max-lg:grid-cols-1 gap-8   ">
          <div className="mx-4 flex justify-start items-center  ">
            <img
              decoding="async"
              src={SliderContent[current].url}
              alt="Image"
            ></img>
          </div>
          <div className="flex flex-col col-span-2 gap-4 ">
            <div className="mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80"
                width="80"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#2baa8d"
                  d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"
                />
              </svg>
            </div>

            <div className="mx-4">
              <h4 className="text-white text-3xl mx-3 ">
                {SliderContent[current].text}
              </h4>
            </div>
            <div className="mx-4">
              <h5 className="text-white text-2xl mx-3  ">
                {SliderContent[current].name}
              </h5>
              <p className="text-[#2baa8d] text-xl mx-3  ">
                {SliderContent[current].level}
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col max-2xl:flex-row py-10  justify-start gap-8  px-4 ">
          <button
            onClick={prevSlide}
            className="w-[90px] h-[90px] border border-gray-600 rounded-full flex justify-center items-center -rotate-90 max-2xl:rotate-0 group hover:bg-[#2baa8d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 320 512"
            >
              <path
                fill="#454d5a"
                className="group-hover:fill-white"
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="  w-[90px] h-[90px] border border-gray-600 rounded-full flex justify-center items-center rotate-90 max-2xl:rotate-180 group hover:bg-[#2baa8d] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 320 512"
            >
              <path
                fill="#454d5a"
                className="group-hover:fill-white"
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default SliderPart;
