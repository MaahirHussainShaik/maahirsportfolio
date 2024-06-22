import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from "next/image";

const workSlider = {
  slides: [
    {
      title: 'Inventory Management',
      description: 'Languages : JAVA, SQL',
      path: '/Invent.jpg',
      url: 'https://github.com/Animeboynz/Software-Construction-Assessment-2.git'
    },
    {
      title: 'The Portfolio',
      description: 'Languages: HTML, CSS, JS',
      path: '/Website.jpg',
      url: ''
    },
    {
      title: 'Beneath the Waves',
      description: 'Languages: C#',
      path: '/Beneath.jpg',
      url: 'https://github.com/BryanCrom/Beneath-The-Waves-Sprint2.git'
    },
    {
      title: 'Other small Projects',
      description: 'Languages: Python, HTML, CSS',
      path: '/High School.jpg',
      url: ''
    },
  ],
};

const WorkSlider = ({ setActiveSlide }) => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a href={slide.url} target="_blank" rel="noopener noreferrer" className='relative rounded-lg overflow-hidden flex flex-col items-center justify-center group'>
            <div className='relative overflow-hidden'>
              <Image src={slide.path} width={500} height={300} alt={slide.title || 'Image description'} />
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
            </div>
            <div className='mt-4 text-center'>
              <h3 className='text-xl font-bold'>{slide.title}</h3>
              <p className='mt-2'>{slide.description}</p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
