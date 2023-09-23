import React, {useState} from 'react'
import styled from 'styled-components';

// icons
import { 
  FaJava,
  FaPython,
  FaJs,
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaLinux,
  FaNodeJs,
  FaDocker,
} from 'react-icons/fa';

import { 
  SiCplusplus,
  SiNextdotjs, 
  SiFramer, 
  SiAssemblyscript,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiGnubash,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import { DiAndroid } from 'react-icons/di';

import { AiFillWindows } from 'react-icons/ai';

import { BsGithub } from 'react-icons/bs';

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <a href="https://iconscout.com/icons/c" class="text-underline font-size-sm" target="_blank"></a>,
          <SiCplusplus />,
          <FaJava />,
          <FaJs />,
          <FaPython />,
          <FaReact />,
          <GrMysql />,
          <SiAssemblyscript />,
          <SiGnubash />,
          <DiAndroid />,
        ],
      },
      {
        title: 'Operating Systems',
        icons: [<AiFillWindows />, 
                <FaLinux />
              ],
      },
      {
        title: 'Technologies',
        icons: [<FaDocker />,
                <FaNodeJs />,
                <SiNextdotjs />, 
                <SiFramer />,
                <SiMongodb />,
                <SiFirebase />,
                <SiVercel />,
                <BsGithub />
              ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Optimization Competition - Won first place in an optimization competition held at the universitys computer science department.',
        stage: '2022',
      },
      {
        title: 'Badge of honour from the Commander of the Commando Brigade for initiating technological solutions according to operational requirements while managing experiments and research.',
        stage: '2020',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Backend Developer - AI-MAPS',
        stage: 'February 2023 — July 2023',
      },
      {
        title: 'Full Stack Developer Intern - Brainnest',
        stage: 'November 2022 — December 2022',
      },
      {
        title: 'Private Programming Tutor',
        stage: 'August 2022 — Present',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'B.Sc. In Computer Science - Bar-Ilan University',
        stage: '2021-Present',
      },
      {
        title: 'Hartman High School',
        stage: '2009-2015',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// counter
import CountUp from 'react-countup'

// a styled component for scrolling
const ScrollableContainer = styled.div`
  overflow-y: auto;
  max-height: 800px; /* Set the desired height */
`;

const About = () => {
  const [index, setIndex] = useState(0)
  return (
   <ScrollableContainer>
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div variants={fadeIn('right', 0.2)} 
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} 
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className='h2'>
            About my <span className='text-accent'>journey.</span>
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} 
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className='max-2-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          Results-driven software developer with a passion for problem solving and 
          innovation. Proficient in Java and JavaScript, with hands-on experience 
          building full web applications. Strong collaborator, leveraging excellent 
          communication skills to work effectively in cross-functional teams. 
          Eager to contribute expertise and enthusiasm to a software development role.
          </motion.p>
           {/* counters */}
           <motion.div variants={fadeIn('right', 0.2)} 
                       initial="hidden"
                       animate="show"
                       exit="hidden"
                       className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
               {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp srart={0} end={2} duration={7} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* num of projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp srart={0} end={35} duration={7} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
              {/* winning awards */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp srart={0} end={4} duration={7} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>winning awards</div>
              </div>
            </div>
           </motion.div>
        </div>
        {/* info */}
        <motion.div variants={fadeIn('left', 0.4)} 
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className='flex flex-col w-full xl:max-w-[50%] h-[50vh]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={`aboutData-${itemIndex}`}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-10`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={`info-${itemIndex}`}
                     className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                     {/* icons */}
                     {item.icons?.map((icon, iconIndex) => {
                      return <div key={`icon-${iconIndex}`} className='text-2xl text-white'>{icon}</div>;
                     })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
   </ScrollableContainer>
  );
};

export default About;
