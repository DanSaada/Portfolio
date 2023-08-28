// data
// const workSlides = {
//   slides: [
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//       ],
//     },
//   ],
// };

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx'

import {
  BsChatLeftText,
} from 'react-icons/bs'

import {
  PiGameController,
} from 'react-icons/pi'

import {
  VscWordWrap
} from 'react-icons/vsc'

// import required modules
import { FreeMode, Pagination } from 'swiper';

// work data
export const workData = [
  {
    icon: <BsChatLeftText />,
    title: 'Web-Chat',
    description: 'Developed a highly responsive chat platform for both Web and Android platforms. The application is built with React and Java respectively',
  },
  {
    icon: <RxPencil2 />,
    title: 'Vector Classifier',
    description: 'A  project in C++ about vector classification using the KNN algorithm and a multi-threading server-client connection.',
  },
  {
    icon: <PiGameController />,
    title: 'Arkanoid Game',
    description: 'A classic Arkanoid game in Java. The project uses object-oriented design with multiple design patterns.',
  },
  {
    icon: <VscWordWrap />,
    title: 'Pstring',
    description: 'Library functions in assembly that will allow working with Pstring in a similar way to the string.h library of the C language.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 
                            group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
               {/* title & description */}
               <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
               </div>
                {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;







// {slide.images.map((image, index) => {
//   return <div>
//     <div>
//       {/* image */}
//       <Image src={image.path} width={500} height={300} alt='' />
//     </div>
//   </div>
// })}