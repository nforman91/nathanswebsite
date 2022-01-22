import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import skiingnate from '../img/skiingnate.JPG';

const OurWork = () => {
    return (
        <StyledWork>
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={skiingnate} alt="profile"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={skiingnate} alt="profile"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={skiingnate} alt="profile"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;
