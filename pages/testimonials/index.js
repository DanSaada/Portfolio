import React, {useState} from 'react'
import styled from 'styled-components';

// component
import TestimonialSlider from "../../components/TestimonialSlider";

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// a styled component for scrolling
const ScrollableContainer = styled.div`
  overflow-y: auto;
  max-height: 800px; /* Set the desired height */
`;

const Testimonials = () => {
  return (
    <ScrollableContainer>
      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* title */}
          <motion.h2 variants={fadeIn('up', 0.2)} 
                     initial="hidden" 
                     animate="show" 
                     exit="hidden"
                     className="h2 mb-8 xl:mb-0">
          What people <span className="text-accent">say.</span>
          </motion.h2>
          {/* slider */}
          <motion.div variants={fadeIn('up', 0.4)} 
                      initial="hidden" 
                      animate="show" 
                      exit="hidden">
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </ScrollableContainer>
  );
};

export default Testimonials;
