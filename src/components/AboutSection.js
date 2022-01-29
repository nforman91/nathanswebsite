import React from "react";
import skiingnate from "../img/skiingnate.JPG";
import { StyledAbout, StyledDescription, StyledImage, Hide } from '../styles';
import { Link } from 'react-router-dom';
// Framer Motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >Front End</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >
              <span>Web Developer</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 
              variants={titleAnim}
            >true.</motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          Thank you for visiting my website! I'm excited to learn
          more about front end web development in my coding journey!
        </motion.p>
        <motion.button variants={fade}>
          Contact Me
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={skiingnate} alt="picture of Nate skiing" />
      </StyledImage>
      <Wave/>
    </StyledAbout>
  );
};

export default AboutSection;
