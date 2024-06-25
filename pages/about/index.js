import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma
} from "react-icons/fa";
import {
  SiC,
  SiCsharp,
  SiMysql,
} from "react-icons/si";
import Image from 'next/image';
import Brain from '../../components/brain';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3 />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <SiC />, name: 'C' },
  { icon: <SiCsharp />, name: 'C#' },
  { icon: <SiMysql />, name: 'SQL' },
  { icon: <FaReact />, name: 'React' },
];

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              As a passionate Student at Auckland University of Technology (AUT) majoring in Software Engineering,
              I am continually driven by my love for coding. I thrive on exploring new technologies and pushing the limits of my knowledge.
              My journey in software engineering is fueled by curiosity and a relentless pursuit of excellence.
              I aim to leverage my skills in innovative projects that create meaningful impact and inspire others.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              I am the Master of my Fate...
                I am the Captain of my Soul...
            </span>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
          </motion.svg>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <div key={index} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EDUCATION CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={educationRef}>
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* DEGREE TITLE */}
                  <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    New Plymouth Boys High School
                  </div>
                  {/* DEGREE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016 - 2020
                  </div>
                  {/* DEGREE INSTITUTION */}
                  <div className="p-1 text-sm font-semibold">
                    Year 12-Year 13
                  </div>
                  {/* DEGREE DESC */}
                  {/* <div className="p-3 text-sm italic"> */}
                    {/* Studied core principles of computer science and software engineering. */}
                  {/* </div> */}
                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* DEGREE TITLE */}
                  <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Auckland University of Technology
                  </div>
                  {/* DEGREE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2025
                  </div>
                  {/* DEGREE INSTITUTION */}
                  <div className="p-1 text-sm font-semibold">
                    Bachelor of Software Engineering
                  </div>
                  {/* DEGREE DESC */}
                  <div className="p-3 text-sm italic">
                    Specialized in advanced software development techniques and project management and minor in AI and Data Science.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;

