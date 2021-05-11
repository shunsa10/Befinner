import React,{ useRef, useEffect } from 'react';
import styled from 'styled-components'
import Cafe1 from './Cafe1'
import Cafe2 from './Cafe2'
import Cafe3 from './Cafe3'
import CafeSubText from './CafeSubText'


const LCafe:React.FC = () => {

    return (
    <>
    <CafeSubText />
    <Container>
        <Cafe1 />
        <Cafe2 />
        <Cafe3 />
    </Container>
    </>
    );
};

export default LCafe;

const Container = styled.div `
    overflow: hidden;
    position: relative;
    padding: 30px 50px;
    padding-bottom: 10rem;
    top: 3rem;
    background-color: #e8eee1;
`

