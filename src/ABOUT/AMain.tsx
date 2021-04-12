import React from 'react';
import {StyleProvider} from '../context/StyleContext';
import styled, {css} from 'styled-components'
import {useState, useContext} from 'react'
import {StyleContext} from '../context/StyleContext'


const Main:React.FC = () => {
    return (
        <>
        <Img src={'./img/img1.jpg'} alt="" /> 
        <TextDiv>
            <AboutTitleText>ABOUT</AboutTitleText>
            <AboutText>
                ccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc

            </AboutText>
        </TextDiv>
        </>
    );
};

export default Main;


const Img = styled.img `
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 40rem;
    object-fit: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const TextDiv = styled.div `
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    width: 25rem;
    height: 15rem;
   margin: 0 auto;
   margin-top: 200px;
   border-radius: .5rem;
`
const AboutTitleText = styled.h2 `
color: white;
font-weight: lighter;
font-size: 3rem;
position: absolute;
margin: 0;
opacity: .5;

`

const AboutText = styled.p `

`