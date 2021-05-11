import React, {useEffect} from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';
import {Link} from 'react-router-dom';

const LFooter:React.FC = () => {


  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);
    return (
        <LFooterMain>
          <LFooterDiv>
            <LFooterH2>BEFINNER</LFooterH2>
            <UlFoo>
              <Link to="/"><LiFoo><AaFoo>HOME</AaFoo></LiFoo></Link>
             <Link to="/About"><LiFoo><AaFoo>ABOUT</AaFoo></LiFoo></Link>
              <Link to="/Todo"><LiFoo><AaFoo>TODO</AaFoo></LiFoo></Link>
              <Link to="/Local"><LiFoo><AaFoo>LOCAL</AaFoo></LiFoo></Link>
            </UlFoo>
          </LFooterDiv>
          <LFooterLower>
            <LFooterLowerText>Copyright © petari, All rights reserved</LFooterLowerText>
            <LFooterLowerP>BEFINNER　support the challenge of beginners</LFooterLowerP>
          </LFooterLower>
        </LFooterMain>
    );
};

export default LFooter;

const LFooterMain = styled.footer `
position : relative;

left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  background-color: #dae0d1;
  width: 100vw;
  height: 300px;
  overflow: hidden;
`
const LFooterH2 = styled.h2 `
position: relative;
top: -1rem;
font-size: 3rem;
color: #fff;
text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
text-align: center;
align-items: center;
`
const LFooterDiv = styled.div `
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
   background-color: #868686;
   color: #fff;
    }
`
const LFooterLower = styled.div `
width: 100%;
height: 30%;
background-color: #c6ccbd;
display: flex;
padding: 20px;
`
const LFooterLowerText = styled.h4 `
margin: 0;
padding-left: 3rem;
font-weight: 600;
opacity: .7;
`
const LFooterLowerP = styled.p `
margin: auto;
padding-left: 25%;
opacity: .8;
`