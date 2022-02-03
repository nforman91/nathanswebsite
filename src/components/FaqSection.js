import React from 'react';
import styled from 'styled-components';
import { StyledAbout } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq 
            variants={scrollReveal} 
            ref={element} 
            // animate={controls} 
            // initial='hidden'
        >
            <h2>Contact <span>Information</span></h2>
            <AnimateSharedLayout>
                <Toggle title="Email">
                    <div className="answer">
                        <p>nathan.forman@gmail.com</p>
                    </div>
                </Toggle>
                <Toggle title="LinkedIn">
                    <div className="answer">
                        <p>https://www.linkedin.com/in/nathanforman/</p>
                    </div>
                </Toggle>
                <Toggle title="GitHub">
                    <div className="answer">
                        <p>https://github.com/nforman91</p>
                    </div>
                </Toggle>
                <Toggle title="Discogs">
                    <div className="answer">
                        <p>https://www.discogs.com/user/nforman</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
