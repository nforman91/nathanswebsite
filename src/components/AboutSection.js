import React from "react";
import skiingnate from "../img/skiingnate.JPG";
import { StyledAbout, StyledDescription, StyledImage, Hide } from '../styles';
// Framer Motion
import {motion} from 'framer-motion';

const AboutSection = () => {

  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 }}
  // };

  // const container = {
  //   hidden: { x: 100 },
  //   show: { 
  //     x: 0, 
  //     transition: { 
  //       duration: 0.75, 
  //       ease: "easeOut", 
  //       staggerChildren: 1,
  //       when: "afterChildren"
  //     }
  //   }
  // }

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div 
          // variants={container} 
          // initial="hidden" 
          // animate="show" 
          // className="title"
        >
          <Hide>
            <motion.h2 
              // variants={titleAnim}
            >We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 
              // variants={titleAnim}
            >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 
              // variants={titleAnim}
            >true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={skiingnate} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

// Styled Components

export default AboutSection;
