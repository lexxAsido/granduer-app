
// import Footer from "@/components/footer";
import AnimationFlow from "@/components/animationFlow";
import Footer from "@/components/Footer";
import SceneFour from "@/components/sceneFour";
import SceneOne from "@/components/sceneOne";
import SceneThree from "@/components/sceneThree";
import SceneTwo from "@/components/sceneTwo";
import React from "react";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div>
      <h1 className="text-center text-6xl font-bold mt-5 max-lg:text-lg">GrandeurSmart </h1>
     {/* <AnimationFlow/> */}
     <SceneFour/>
     {/* <SceneThree/> */}
      <Footer/>
    </div>
  );
}
