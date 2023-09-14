// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxPencil2,
  RxArrowTopRight,
} from 'react-icons/rx'

import { RiGithubLine } from 'react-icons/ri'

import { BsChatLeftText } from 'react-icons/bs'

import { PiGameController } from 'react-icons/pi'

import { VscWordWrap, VscGraph } from 'react-icons/vsc'

// import required modules
import { FreeMode, Pagination } from 'swiper';

// work data
export const workData = [
  {
    icon: <BsChatLeftText />,
    url: 'https://github.com/DanSaada/AppChat-Android',
    title: 'Web-Chat',
    description: 'Developed a highly responsive chat for both Web and Android platforms. The application is built with React and Java respectively.',
  },
  {
    icon: <RxPencil2 />,
    url: 'https://github.com/DanSaada/KNN-Multi-Threading-Server-Classifier',
    title: 'Vector Classifier',
    description: 'A project in C++ about vector classification using the KNN algorithm and a multi-threading server-client connection.',
  },
  {
    icon: <PiGameController />,
    url: 'https://github.com/DanSaada/Arkanoid-Game',
    title: 'Arkanoid Game',
    description: 'A classic Arkanoid game in Java. The project uses object-oriented design with multiple design patterns in a GUI friendly platform.',
  },
  {
    icon: <VscWordWrap />,
    url: 'https://github.com/DanSaada/Pstring',
    title: 'Pstring',
    description: 'Library functions in assembly that will allow working with Pstring in a similar way to the string.h library of the C language.',
  },
  {
    icon: <VscGraph />,
    url: 'https://github.com/DanSaada/Automatic-Grading-System',
    title: 'Auto Grading System',
    description: 'An auto system for CS students assignments, which compiles, runs and grade submitted programs to a csv.'
  }
];

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'>

      {workData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col xs:flex-col gap-x-6 sm:gap-x-0 
                            group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon & title  */}
                <div className='flex items-center'>
                  <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                  <div className='mb-3 ml-3'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                 </div>
                </div>
                 {/* description */}
                 <div className='mb-7'>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                 </div>
                  {/* arrow & github icon */}
                <div className='text-3xl flex justify-between items-center'>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <div className='flex items-center'>
                      <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                    </div>
                  </a>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <div className='flex items-center'>
                      <RiGithubLine className='hover:text-accent transition-all duration-300' />
                    </div>
                  </a>
                </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
