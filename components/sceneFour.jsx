"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaCamera, FaMobileAlt } from "react-icons/fa";
import { FaLightbulb, FaThermometerHalf } from "react-icons/fa";
import { MdOutlineCoffeeMaker, MdTv } from "react-icons/md";
import { GiTheaterCurtains, GiWashingMachine } from "react-icons/gi";
import { PiSecurityCameraFill } from "react-icons/pi";
import { RiSignalTowerFill } from "react-icons/ri";
import { motion } from "framer-motion";

const SceneFour = () => {
  useEffect(() => {
    const animateArrow = (selector) => {
      gsap.fromTo(
        selector,
        { strokeDasharray: "0, 200", strokeDashoffset: 200 },
        {
          strokeDasharray: "200, 200",
          strokeDashoffset: 0,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    };

    animateArrow("#arrow-light");
    animateArrow("#arrow-thermo");
    animateArrow("#arrow-wash");
    animateArrow("#arrow-tv");
    animateArrow("#arrow-coffee");
    animateArrow("#arrow-camera");
    animateArrow("#arrow-curtains");
    animateArrow("#arrow-canon");
  }, []);

  return (
    <section className="flex flex-col gap-2 justify-around items-center lg:min-h-screen relative overflow-hidden">
      <h3 className="text-2xl font-bold animate-pulse">Scene Four</h3>
      <div className="relative flex justify-center items-center bg-gray-100 py-5 shadow-lg shadow-black p-2 border 
        w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[50rem] lg:h-[50rem]">

        {/* Central App */}
        <div className="central-app flex flex-col items-center gap-3 justify-center">
          <RiSignalTowerFill className="text-3xl animate-ping" />
          <FaMobileAlt size={100} className="text-cyan-500" />
          <h3 className="font-bold text-xl text-center">GrandeurSmart App</h3>
        </div>

        {/* SVG for arrows */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            id="arrow-light"
            x1="400"
            y1="400"
            x2="50"
            y2="50"
            stroke="orange"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-thermo"
            x1="400"
            y1="400"
            x2="750"
            y2="50"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-wash"
            x1="400"
            y1="400"
            x2="50"
            y2="750"
            stroke="gray"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-tv"
            x1="400"
            y1="400"
            x2="750"
            y2="750"
            stroke="purple"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-coffee"
            x1="400"
            y1="400"
            x2="75"
            y2="360"
            stroke="brown"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-camera"
            x1="400"
            y1="400"
            x2="725"
            y2="440"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-curtains"
            x1="400"
            y1="400"
            x2="400"
            y2="690"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            id="arrow-canon"
            x1="400"
            y1="400"
            x2="400"
            y2="5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Devices */}
        <div className="absolute top-5 left-5">
          <FaLightbulb size={50} className="text-yellow-500 animate-pulse" />
        </div>
        <div className="absolute top-5 right-50">
          <FaCamera size={50} className="text-black animate-pulse" />
        </div>
        <div className="absolute bottom-5 left-50">
          <GiTheaterCurtains size={50} className="text-blue-700 animate-pulse" />
        </div>
        <div className="absolute top-5 right-5">
          <FaThermometerHalf size={50} className="text-red-500 animate-pulse" />
        </div>
        <div className="absolute bottom-5 left-5">
          <GiWashingMachine size={50} className="text-gray-500 animate-pulse" />
        </div>
        <div className="absolute bottom-5 right-5">
          <MdTv size={50} className="text-purple-500 animate-pulse" />
        </div>
        <div className="absolute top-[40%] left-2">
          <MdOutlineCoffeeMaker size={50} color="brown" className="animate-pulse" />
        </div>
        <div className="absolute bottom-[40%] right-2">
          <PiSecurityCameraFill size={50} className="text-green-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default SceneFour;
