// Components
import { useState } from 'react';
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const workSlider = {
  slides: [
    {
      title: 'Project 1',
      description: 'My First Project is Inventory Management System. I developed an inventory management software as part of a team of two, where I served as both Product Owner and developer. The software was built using JAVA, with the backend supported by JDBC and SQL queries. My responsibilities included defining the project scope, setting priorities, and coding the application. This project provided valuable experience in software development and project management. It was a successful and rewarding endeavor that showcased effective teamwork and technical proficiency. ',
    },
    {
      title: 'Project 2',
      description: 'My Second Project is PortFolio Website. I created a personal portfolio to showcase my talents and projects. I developed it using React and Tailwind CSS, focusing on a clean, modern design. This project allowed me to demonstrate my skills in frontend development and UI design. The portfolio includes various sections highlighting my work and skills. It was a solo effort that helped me refine my abilities and present my professional profile effectively.',
    },
    {
      title: 'Project 3',
      description: 'My third major Project is a Game called Beneath the Waves. I co-developed an immersive underwater game in Unity using C#, leading a talented team of five as both Scrum Master and Primary coder. The game features stunning underwater environment, multiplayer mode and engaging gameplay mechanics, showcasing our collaborative effort and technical expertise. Dive into a world of aquatic adventure, brought to life through teamwork and innovation.',
    },
    {
      title: 'Project 4',
      description: 'In addition to my larger projects, I have also developed a range of smaller yet impactful projects. These include a talking AI assistant, created using Python, that leverages natural language processing to interact and assist users, and a website, built with HTML and CSS, offering a repository of basic code snippets for quick reference. Each of these projects highlights my versatility and commitment to creating practical and user-friendly solutions.',
    },
  ],
};

const Work = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 items-center justify-center'>
          <div className='text-center xl:text-left flex xl:w-[30vw] flex-col mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My Works <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto xl:mx-0'
            >
              {workSlider.slides[activeSlide].description}
            </motion.p>
          </div>
          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider setActiveSlide={setActiveSlide} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
