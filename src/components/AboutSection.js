import React from "react";
import skiingnate from "../img/skiingnate.JPG";
// Styled
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, Hide } from '../styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
