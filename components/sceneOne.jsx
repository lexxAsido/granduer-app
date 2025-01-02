"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaLightbulb, FaThermometerHalf, FaCamera } from 'react-icons/fa';
import { MdOutlineCoffeeMaker, MdTv } from "react-icons/md";
import { GiTheaterCurtains, GiWashingMachine } from "react-icons/gi";
import { PiSecurityCameraFill } from "react-icons/pi";
import Image from 'next/image';
import { motion } from "framer-motion";

const SceneOne = () => {
    useEffect(() => {
        gsap.fromTo(
            '.device',
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, stagger: 0.4, duration: 1 }
        );
    }, []);

    return (
        <main className='lg:min-h-dvh flex flex-col gap-4 items-center w-full h-full justify-center max-lg:h-[40em]'>
            <h3 className='text-2xl font-bold animate-pulse max-lg:text-lg'>Scene One</h3>
            <motion.div
                className=" grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-4 border max-lg:p-6 w-[50rem] h-[50rem] bg-gray-100 lg:py-5 max-lg:w-auto max-lg:h-auto shadow-lg shadow-black"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.2,
                    duration: 1.0
                }}
            >

                <div className=' device flex items-center flex-col'>
                    <FaLightbulb className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm " >Light Bulb</h3>
                    <Image src="/philiphue.png"
                        alt='Philip Hue'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-10'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <FaThermometerHalf className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm " >Thermostat</h3>
                    <Image src="/heatwell.png"
                        alt='Heatwell'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-8'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <FaCamera className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold" >Camara</h3>
                    <Image src="/canon.png"
                        alt='Canon'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-8'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <MdTv className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm ">Smart Tv</h3>
                    <Image src="/samsung.png"
                        alt='Samsung'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-8'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <MdOutlineCoffeeMaker className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm ">Coffee Maker</h3>
                    <Image src="/panasonic.png"
                        alt='panasonic'
                        width={130}
                        height={100}
                        className='lg:ml-5 max-lg:w-14 max-lg:h-8'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <GiWashingMachine className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm ">Washing Machine</h3>
                    <Image src="/lg.png"
                        alt='LG'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-8'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <GiTheaterCurtains className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm ">Smart Window Blinds</h3>
                    <Image src="/smartwings.png"
                        alt='LG'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-10'
                    />
                </div>

                <div className=' device flex items-center flex-col'>
                    <PiSecurityCameraFill className='text-7xl max-lg:text-4xl' />
                    <h3 className="font-bold max-lg:text-sm ">Security Camera</h3>
                    <Image src="/arlo.png"
                        alt='Arlo'
                        width={100}
                        height={100}
                        className='max-lg:w-14 max-lg:h-10'
                    />
                </div>


            </motion.div>
        </main>
    );
};

export default SceneOne;
