"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeIn" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const RoedeanSport = () => {
  const sections = [
    { title: "App Splash Screen", img: "/roedean00.png" },
    { title: "Home Screen", img: "/roedean1.png" },
    { title: "News Hub", img: "/roedean2.png" },
    { title: "Team Tab", img: "/roedean3.png" },
    { title: "Standings Tab", img: "/roedean4.png" },
  ];

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Intro Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1D4D] mb-6"
        >
          Roedean School Johannesburg
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          The Official Roedean School Sports App is designed exclusively for
          students, parents, and staff to follow inter-house competitions,
          fixtures, live match scores, sports news, and athlete profiles in
          real time.
          <br />
          <br />
          This demo highlights the core screens and visual identity of the app,
          reflecting Roedean’s heritage, excellence, and strong sporting tradition.
          <br />
          <br />
          The full project will include expanded features and secure
          administrative access for managing competitions and communications.
        </motion.p>
      </motion.div>

      {/* Screens Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          {/* Header */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#1B1D4D] flex justify-center p-3 sm:p-4 md:p-5 rounded-md mb-6 sm:mb-8 shadow-md"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              {section.title}
            </h2>
          </motion.div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <img
              src={section.img}
              alt={section.title}
              className="rounded-2xl shadow-2xl max-w-full w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Live Demo Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="mb-16 sm:mb-20"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1B1D4D] flex justify-center p-3 sm:p-4 md:p-5 rounded-md mb-6 sm:mb-8 shadow-md"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Live Demo
          </h2>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center max-w-3xl mx-auto"
        >
          The live demo provides a guided walkthrough of the app’s core
          features, demonstrating real-time navigation through Live Scores,
          News, Teams, and Standings. This preview reflects the seamless,
          intuitive experience designed specifically for the Roedean School
          community.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <video
            src="/intro.mp4"
            controls
            className="rounded-2xl shadow-2xl max-w-full w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RoedeanSport;
