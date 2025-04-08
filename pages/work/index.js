import { useState } from 'react';
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const workSlider = {
  slides: [
    {
      title: 'Inventory Management',
      description: 'My First Project is Inventory Management System. I developed an inventory management software as part of a team of two, where I served as both Product Owner and developer. The software was built using JAVA, with the backend supported by JDBC and SQL queries. My responsibilities included defining the project scope, setting priorities, and coding the application. This project provided valuable experience in software development and project management. It was a successful and rewarding endeavor that showcased effective teamwork and technical proficiency.',
    },
    {
      title: 'Portfolio Website',
      description: 'My Second Project is this Portfolio Website. I created a personal portfolio to showcase my talents and projects. I developed it using React and Tailwind CSS, focusing on a clean, modern design. This project allowed me to demonstrate my skills in frontend development and UI design. The portfolio includes various sections highlighting my work and skills. It was a solo effort that helped me refine my abilities and present my professional profile effectively.',
    },
    {
      title: 'Beneath the Waves',
      description: 'My third major Project is a Game called Beneath the Waves. I co-developed an immersive underwater game in Unity using C#, leading a talented team of five as both Scrum Master and Primary coder. The game features stunning underwater environment, multiplayer mode and engaging gameplay mechanics, showcasing our collaborative effort and technical expertise. Dive into a world of aquatic adventure, brought to life through teamwork and innovation.',
    },
    {
      title: 'SPEED System',
      description: 'In this project, I collaborated within a cross-functional team to develop a SPEED system, where I played the role of backend developer and tester. This is a website to fetch, post articles or books relating to Software Practices. Following Agile methodologies, we utilized Trello for sprint planning, task management, and tracking project progress. My role focused on building the backend infrastructure, where I developed RESTful API endpoints to perform CRUD operations with a MongoDB database. To ensure high code quality and reliability, I implemented automated testing pipelines using Jest and integrated CI/CD workflows via GitHub Actions to automate testing and deployment processes. This project enhanced my skills in backend development, teamwork, and modern DevOps practices.',
    },
  ],
};

const Work = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-12 flex items-center">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-8 xl:flex-row xl:gap-x-8 items-center justify-center">
          {/* Text Section */}
          <div className="text-center xl:text-left flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 xl:w-1/3 mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My Works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-sm sm:text-base md:text-lg"
            >
              {workSlider.slides[activeSlide].description}
            </motion.p>
          </div>
          {/* Slider Section */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:w-2/3"
          >
            <WorkSlider setActiveSlide={setActiveSlide} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;