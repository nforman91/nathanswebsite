import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// Images
// import skiingnate from '../img/skiingnate.JPG';
import hockeyteamslibrary from '../img/hockey-teams-library.png';
import coderheroes from '../img/coder_heroes.png';
// Animations
import { motion } from 'framer-motion';
import {
    pageAnimation, 
    fade, 
    photoAnim, 
    lineAnim, 
    // slider, 
    // sliderContainer
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [element, controls] = useScroll();
    // const [element2, controls2] = useScroll();
    
    return (
        <StyledWork 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}
        >
            {/* <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
            </motion.div> */}
            <StyledMovie>
                <motion.h2>Hockey Teams Library</motion.h2>
                <StyledP>An application for displaying basic information about NHL teams. Combines third-party API data for displaying team information in modals, and local state for displaying logos/sorting functionality.</StyledP>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={hockeyteamslibrary} alt="hockey teams library image"/>
                    </Hide>
                <div className="button-container">
                    <motion.button variants={fade}>
                        <a 
                            href="https://hockey-team-library.vercel.app/" 
                            className="visit-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >Visit Project</a>
                    </motion.button>
                    <motion.button variants={fade}>
                        <a 
                            href="https://github.com/nforman91/image-library/tree/main/image-library" 
                            className="github-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >GitHub</a>
                    </motion.button>
                </div>
            </StyledMovie>
            <StyledMovie
                ref={element} 
                variants={fade}
                animate={controls}
                initial='hidden'
            >
                <motion.h2>CoderHeroes</motion.h2>
                <StyledP>An application to help youth break into tech built for third-party client. Primary contributions were UX designs using Figma and Ant Design, secondary contributions included adding functionality for multiple roles, including parent, instructor and admin.</StyledP>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={coderheroes} alt="coder heroes image"/>
                    </Hide>
                <div className="button-container">
                    <motion.button variants={fade}>
                        <a 
                            href="https://a.coderheroes.dev/" 
                            className="visit-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >Visit Project</a>
                    </motion.button>
                    <motion.button variants={fade}>
                        <a 
                            href="https://github.com/BloomTech-Labs/coder-heroes-fe" 
                            className="github-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >GitHub</a>
                    </motion.button>
                </div>
            </StyledMovie>
            {/* <StyledMovie 
                ref={element} 
                variants={fade}
                animate={controls}
                initial='hidden'
            >
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={skiingnate} alt="profile"/>
                </Link>
            </StyledMovie>
            <StyledMovie
                ref={element2} 
                variants={fade}
                animate={controls2}
                initial='hidden'
            >
                <h2>Good Times</h2>
                <motion.div className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={skiingnate} alt="profile"/>
                </Link>
            </StyledMovie> */}
            <ScrollTop/>
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 320px){
        padding: 2rem 2rem;
    }
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    .button-container{
        margin-left: 32rem;
    }
    button{
        margin-top: 1rem;
    }
    a{
        text-decoration: none;
        color: #000000;
    }
`;

const StyledP = styled.p`
    color: #000000;
`;

const Hide = styled.div`
    overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #23d997;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #9ff7d6;
`;

const Frame3 = styled(Frame1)`
    background: #beffe7;
`;

export default MyWork;
