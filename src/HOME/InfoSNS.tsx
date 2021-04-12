import React from 'react';
import styled, {css} from 'styled-components'
import {useState, useContext} from 'react'
import {StyleContext} from '../context/StyleContext'
// import { type } from 'node:os';
// import {Component} from 'react'

type ToggleProps = {
    styles?: boolean
}

const InfoSNS: React.FC = () => {
    const [styles, setStyles] =useContext(StyleContext);
    return (
        
       <UlSns> 
           <LiSns theme={{ time: 1}}　styles={styles ? true : false}><Asns>LOGIN</Asns></LiSns>
           <LiSns theme={{ time: 2}}　styles={styles ? true : false}><Asns>SIGNIN</Asns></LiSns>
           <LiSns theme={{ time: 3}}　styles={styles ? true : false}><Asns>LOGOUT</Asns></LiSns>
           
       </UlSns>
    );
};
export default InfoSNS;

const UlSns = styled.ul `
    position: absolute;
    bottom: 40px;
    right: 60px;
    display: flex;
    z-index: 100;
`
const LiSns = styled.li<ToggleProps> `
    cursor: grab;
    list-style: none;
    color: #111;
    margin: 5px;
    padding: 0 6px;
    background: #fff;
    transition: 0.5s;
    transition-delay: calc(0.2s * ${({theme}) => theme.time});
    //コールバック関数
    ${({styles}) => styles ? css `
     opacity: 0;
     visibility: hidden;
     transform: translateY(100px);
    
    ` : ''}
    &:hover {
        
        background: #82fff5;
    }
`
const Asns = styled.a `
    color: #111;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
`
