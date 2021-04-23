import React from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';
import {Link} from 'react-router-dom';

const Footer:React.FC = () => {
    return (
        <FooterMain>
          <FooterDiv>
            <FooterH2>BEFINNER</FooterH2>
            <UlFoo>
              <Link to="/"><LiFoo><AaFoo>HOME</AaFoo></LiFoo></Link>
             <Link to="/About"><LiFoo><AaFoo>ABOUT</AaFoo></LiFoo></Link>
              <Link to="/Todo"><LiFoo><AaFoo>TODO</AaFoo></LiFoo></Link>
              <Link to="/"><LiFoo><AaFoo>SONTACT</AaFoo></LiFoo></Link>
            </UlFoo>
          </FooterDiv>
          <FooterLower>
            <FooterLowerText>Copyright © petari, All rights reserved</FooterLowerText>
            <FooterLowerP>BEFINNER　support the challenge of beginners</FooterLowerP>
          </FooterLower>
        </FooterMain>
    );
};

export default Footer;

const FooterMain = styled.footer `
position : relative;
top: 265rem;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  background-color: #81fad2;
  width: 100vw;
  height: 300px;
  overflow: hidden;
`
const FooterH2 = styled.h2 `
position: relative;
top: -1rem;
font-size: 3rem;
color: #fff;
text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
text-align: center;
align-items: center;
`
const FooterDiv = styled.div `
align-items: center;
margin: 0 auto;
`
const UlFoo = styled.ul `
   position: relative;
   top: -2rem;
   display: flex;
   padding-right: 15px;
   padding-left: 0;
`
const LiFoo = styled.li `
    list-style: none;
    text-align: center;
    margin: 15px 0;
    margin-left: 1rem;
   
    //propsで渡している　コールバック関数　
`
const AaFoo = styled.a `
    color: #111;
    font-size: 1.5em;
    letter-spacing: 4px;
    text-decoration: none;
    font-weight: 300;
    background: #fff;
    padding: 4px 10px;
    display: inline-block;
    border-radius: 5px;
    &:hover {
   background: #00d8b4;
   color: #fff;
    }
`
const FooterLower = styled.div `
width: 100%;
height: 30%;
background-color: #60e4b8;
display: flex;
padding: 20px;
`
const FooterLowerText = styled.h4 `
margin: 0;
padding-left: 3rem;
font-weight: 600;
opacity: .7;
`
const FooterLowerP = styled.p `
margin: auto;
padding-left: 25%;
opacity: .8;
`