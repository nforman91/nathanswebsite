import React from "react";
import skiingnate from "../img/skiingnate.JPG";
import { StyledAbout, StyledDescription, StyledImage, Hide } from '../styles';
// Framer Motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={skiingnate} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
