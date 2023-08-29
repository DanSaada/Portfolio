// testimonial data
const testimonialData = [
  {
    image: '/roy-zweig.png',
    name: 'Roy Zweig',
    position: 'Colonel',
    message:
      'Dan served under my command during my tenure as commander of the Maglan unit. Dan performed his role with dedication and excellence with a desire for constant learning and self-improvement.',
  },
  {
    image: '/Eliav-Zakai.png',
    name: 'Eliav Zakai',
    position: 'CEO of LEAD',
    message:
      'Based on my acquaintance with Dan, I can testify that he is a very high quality young man with many virtues. Dan is a humble, determined and committed guy, who demonstrates a mature and calm leadership style, which instills confidence in his surroundings. I know that Dan is asking to reach significant positions of leadership and influence in Israeli society and I believe that he will fulfill this purpose. Therefore, I have no doubt that any body or framework that takes him into their ranks will enjoy it and be proud of him and his achievements.',
  },
];

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// next image
import Image from 'next/image';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx'

import { BsChatLeftText } from 'react-icons/bs'

import { PiGameController } from 'react-icons/pi'

import { VscWordWrap } from 'react-icons/vsc'

import { BsArrowRight } from 'react-icons/bs'

import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'>

      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 
                              xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
