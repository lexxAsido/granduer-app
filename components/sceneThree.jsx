"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaMobileAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const SceneThree = () => {
  useEffect(() => {
    gsap.to('.device', {
      x: 0,
      y: 0,
      scale: 0.5,
      duration: 1.5,
      stagger: 0.2,
    });


    gsap.fromTo(
      '.central-app',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, delay: 1.5, duration: 1 }
    );
  }, []);

  return (
    <section className="flex flex-col justify-around items-center lg:min-h-dvh max-lg:h-[40em] relative overflow-hidden">
      <h3 className='text-2xl font-bold animate-pulse max-lg:text-lg'>Scene Three</h3>
      <motion.div
        className=" border flex justify-center w-[50rem] h-[50rem] bg-gray-100 py-5 max-lg:w-auto max-lg:h-auto shadow-lg shadow-black"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.2,
          duration: 1.0
        }}
      >

        <div className="central-app flex flex-col items-center gap-3 justify-center">
          <FaMobileAlt size={200} className='text-cyan-500 ' />
          <h3 className='font-bold text-2xl max-lg:text-lg '>GrandeurSmart App</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default SceneThree;
