import {Link} from 'react-router-dom';
import React from 'react';
import styled, {css} from 'styled-components'
import {useContext} from 'react'
import {StyleContext} from '../context/StyleContext'
import { sp } from "../media";


type ToggleProps = {
    styles?: boolean
}


const LNav:React.FC = () => {
    const [styles] =useContext(StyleContext);
    return (
    <LNavDiv styles={styles ? true : false}>
         <UlNav styles={styles ? true : false}>
            <Link to="/"><LiNav theme={{ time: 1}} styles={styles ? true : false}><AaNav>Home</AaNav></LiNav></Link>
            <Link to ="/About"><LiNav theme={{ time: 2}}　styles={styles ? true : false}><AaNav>About</AaNav></LiNav></Link>
            <Link to ="/Todo"><LiNav theme={{ time: 3}}　styles={styles ? true : false}><AaNav>Todo</AaNav></LiNav></Link>
            <Link to ="/Local"><LiNav theme={{ time: 4}}　styles={styles ? true : false}><AaNav>LOCAL</AaNav></LiNav></Link>
        </UlNav>
    </LNavDiv>
    )
}
export default LNav;


const LNavDiv = styled.div<ToggleProps> `
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    backdrop-filter: blur(15px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    transition-delay: 1s;
    ${({styles}) => styles ? css `
     height: 100%;
     backdrop-filter: blur(15px);
     box-shadow: 10px 0 15px rgba(0, 0, 0, 0.5);
     transition-delay: 0s;
      z-index: 100;
    ` : ''}
`


const UlNav = styled.ul<ToggleProps> `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    pointer-events: none;
    ${({styles}) => styles ? css `
    pointer-events: auto;
    ${sp`
    left: 48%;
    `}
    ` : ''}
`
const LiNav = styled.li<ToggleProps>`
    list-style: none;
    text-align: center;
    margin: 15px 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    transform: translateX(200px);
    transition-delay: calc(0.2s * ${({theme}) => theme.time});
    //propsで渡している　コールバック関数　

    ${({styles}) => styles ? css `
    opacity: 1;
    visibility: visible;
    transform: translateX(0px);
    ` : ''}
`
const AaNav = styled.a `
    color: #111;
    font-size: 1.5em;
    letter-spacing: 4px;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    background: #fff;
    padding: 4px 10px;
    display: inline-block;

    &:hover {
    background: #111;
   color: #fff;
   letter-spacing: 10px;
   text-transform: lowercase;
    }
`

