import React from "react";
import stopwatch from "../img/stopwatch.png";
import { StyledAbout, StyledDescription, StyledImage } from '../styles';
import styled from 'styled-components';

const ServicesSection = () => {
  return (
    <Services>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={stopwatch} alt="stopwatch"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={stopwatch} alt="stopwatch"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={stopwatch} alt="stopwatch"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={stopwatch} alt="stopwatch"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </StyledDescription>
      <StyledImage>
        <img src={stopwatch} alt="stopwatch"/>
      </StyledImage>
    </Services>
  );
};

const Services = styled(StyledAbout)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
