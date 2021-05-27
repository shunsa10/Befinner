import React from 'react';
import styled, {css} from 'styled-components'
// import img4 from './assets/img/img4.jpg'
import {StyleContext} from '../context/StyleContext'
import {useContext} from 'react'

import { pc, sp, tab } from "../media";

type ToggleProps = {
    styles?: boolean
}

const Title:React.FC = () => {
    // console.log(process.env.REACT_APP_PUBLIC_URL);
    // console.log(window.location.origin);
    const [styles] =useContext(StyleContext);
    return (
        <>
          <DivGlass styles={styles ? true : false}></DivGlass>
            <DivContent styles={styles ? true : false}>
                <ContentH2>C'est la vie.<br /><H2span>If In doubt Surfing.</H2span></ContentH2>
            </DivContent>
          <Img src={'./img/imgMain.jpg'} alt="" /> 
        </>
    );
};
export default Title;

const DivGlass = styled.div<ToggleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  backdrop-filter: blur(15px);
  z-index: 1;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  transition-delay: 1s;
  ${({ styles }) =>
    styles
      ? css`
          width: 100%;
          backdrop-filter: blur(15px);
          box-shadow: 10px 0 15px rgba(0, 0, 0, 0.5);
          transition-delay: 0s;
        `
      : ""}
`;

const DivContent = styled.div<ToggleProps> `
    position: relative;
    z-index: 10;
    width: 100%;
    text-align: center;
    transition: 0.5s;
    transition-delay: 1s;
    top: 8rem;
    ${({styles}) => styles ? css `
        opacity: 0;
        visibility: hidden;
        transform: translateX(-200px);
        transition-delay: 0s;
    ` : ''}
`
const ContentH2 = styled.h2`
  position: relative;
  color: #fff;
  font-size: 12vw;
  line-height: 0.55em;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  font-family: "Dancing Script", cursive;
  ${tab`
       top: 2rem;
       
`}
`;

const H2span = styled.span`
  font-size: 0.2em;
  font-weight: 300;
  letter-spacing: 5px;
  background: #fff;
  color: #111;
  padding: 0 10px;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  ${tab`
        font-size: 0.25em;
        font-weight: 300;
        letter-spacing: 2px;
        padding: 0 5px;
`}
`;
const Img = styled.img `
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `