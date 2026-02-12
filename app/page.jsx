
// import Footer from "@/components/footer";
import AnimationFlow from "@/components/animationFlow";
import Footer from "@/components/Footer";

import React from "react";
import { motion } from "framer-motion";
import RoedeanSport from "@/components/RoedeanSport";


export default function Home() {
  return (
    <div className="">
      <h1 className="text-center text-6xl font-bold max-lg:text-lg py-5 text-white underline-offset-8 capitalize bg-[#1B1D4D]">Demo of the Roedean Sport App </h1>
     {/* <AnimationFlow/> */}
     <RoedeanSport/>
     {/* <SceneThree/> */}
      <Footer/>
    </div>
  );
}
