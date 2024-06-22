import React from 'react';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import { Typewriter } from 'react-simple-typewriter';

// framer Motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* {text} */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* {title} */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            <span className='text-white'>
              I am{' '}
              <span className='text-accent'>
                <Typewriter
                  words={['a Developer', 'a Coder','an Engineer', ' a Student', 'an artist', 'Maahir']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </motion.h1>
          {/* {subtitle} */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Hi, I am Maahir Hussain Shaik, a passionate Coder and developer with a knack for
            transforming ideas into reality through code. Welcome to my digital space, where creativity meets functionality.
            Thank you for visiting, and I look forward to connecting with you.
          </motion.p>
          {/* {btn} */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* {image} */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* {bg img} */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;