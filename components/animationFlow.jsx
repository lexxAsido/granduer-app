"use client"
import React, { useEffect, useState } from 'react';
import SceneOne from './sceneOne';
import SceneTwo from './sceneTwo';
import SceneThree from './sceneThree';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import SceneFour from './sceneFour';


const AnimationFlow = () => {
  const [scene, setScene] = useState(1);
  useEffect(() => {
    
    const interval = setInterval(() => {
      setScene((prev) => (prev < 4 ? prev + 1 : 1)); 
    }, 7000);

    
    return () => clearInterval(interval);
  }, []);
  const nextScene = () => setScene((prev) => (prev < 3 ? prev + 1 : 1));

  return (
      <div className="animation-flow ">
      {scene === 1 && <SceneOne />}
      {scene === 2 && <SceneTwo />}
      {scene === 3 && <SceneThree />}
      {scene === 4 && <SceneFour />}
      <div className='flex w-full justify-center items-center border bg-black mb-4'>
        <button onClick={nextScene} className='md:p-2 text-green-500 font-bold  text-3xl max-lg:text-sm'>Next</button>
        <FaRegArrowAltCircleRight className='text-3xl text-white animate-ping'/> 
      </div>

    </div>
  );
};

export default AnimationFlow;
