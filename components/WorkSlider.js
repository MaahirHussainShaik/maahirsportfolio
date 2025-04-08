import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import Image from "next/image";

const workSlider = {
  slides: [
    {
      title: 'Inventory Management',
      description: 'Languages: JAVA, SQL',
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
      description: 'Tools & Tech: React.js, Node.js, MongoDB, Github Actions, Jest, Trello, Agile Methodology',
      path: '/SPEED.jpg',
      url: 'https://github.com/Fumihiro1/Software-Practice-Empirical-Evidence-Database-SPEED'
    },
  ],
};

const WorkSlider = ({ setActiveSlide }) => {
  return (
    <div className="relative w-full mx-auto">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="w-full h-auto min-h-[280px] sm:min-h-[340px] md:min-h-[480px]"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {workSlider.slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <a
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center group w-full max-w-[400px] mx-auto p-4"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={slide.path}
                  width={500}
                  height={300}
                  alt={slide.title || 'Project image'}
                  draggable="false"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{slide.title}</h3>
                <p className="mt-2 text-sm sm:text-base md:text-lg">{slide.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"><BsArrowRight /></div>
      <div className="swiper-button-prev"><BsArrowLeft /></div>
    </div>
  );
};

export default WorkSlider;