"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaLightbulb, FaThermometerHalf, FaCamera } from 'react-icons/fa';
import { MdOutlineCoffeeMaker, MdTv } from "react-icons/md";
import { GiTheaterCurtains, GiWashingMachine } from "react-icons/gi";
import { PiSecurityCameraFill } from "react-icons/pi";
import Image from 'next/image';
import { motion } from "framer-motion";

const SceneTwo = () => {
  useEffect(() => {
      
    gsap.fromTo(
      ".app-icon",
      { x: 0, y: 0 },
      {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section className="flex flex-col justify-around items-center lg:min-h-dvh max-lg:h-[40em] relative overflow-hidden">
      <h3 className='text-2xl font-bold animate-pulse max-lg:text-lg'>Scene Two</h3>
      <motion.div className="grid grid-cols-3 border max-lg:grid-cols-2 max-lg:p-6 max-lg:gap-4 w-[50rem] h-[50rem] bg-gray-100 lg:py-5 max-lg:w-auto max-lg:h-auto shadow-lg shadow-black"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          stiffness: 125,
          delay: 0.2,
          duration: 0.8
        }}
      >

        <div className=' app-icon flex items-center flex-col'>
          <FaLightbulb className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm ">Light Bulb</h3>
          <Image src="/philiphue.png"
            alt='Philip Hue'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-10'
          />
        </div>

        <div className='app-icon flex items-center flex-col'>
          <FaThermometerHalf className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm" >Thermostat</h3>
          <Image src="/heatwell.png"
            alt='Heatwell'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-8'
          />
        </div>

        <div className=' app-icon flex items-center flex-col'>
          <FaCamera className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm" >Camara</h3>
          <Image src="/canon.png"
            alt='Canon'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-8'
          />
        </div>

        <div className=' app-icon flex items-center flex-col'>
          <MdTv className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm">Smart Tv</h3>
          <Image src="/samsung.png"
            alt='Samsung'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-8'
          />
        </div>

        <div className=' app-icon flex items-center flex-col'>
          <MdOutlineCoffeeMaker className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm">Coffee Maker</h3>
          <Image src="/panasonic.png"
            alt='panasonic'
            width={130}
            height={100}
            className='lg:ml-5 max-lg:w-14 max-lg:h-8'
          />
        </div>

        <div className=' app-icon flex items-center flex-col'>
          <GiWashingMachine className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm">Washing Machine</h3>
          <Image src="/lg.png"
            alt='LG'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-8'
          />
        </div>

        <div className=' app-icon flex items-center flex-col'>
          <GiTheaterCurtains className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm">Smart Window Blinds</h3>
          <Image src="/smartwings.png"
            alt='LG'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-8'
          />
        </div>

        <div className=' app-icon flex items-center flex-col'>
          <PiSecurityCameraFill className='text-7xl max-lg:text-4xl' />
          <h3 className="font-bold max-lg:text-sm">Security Camera</h3>
          <Image src="/arlo.png"
            alt='Arlo'
            width={100}
            height={100}
            className='max-lg:w-14 max-lg:h-8'
          />
        </div>


      </motion.div>
    </section>

  );
};

export default SceneTwo;
