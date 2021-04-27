import React from 'react';
import styled from 'styled-components'
import Cafe1 from './Cafe1'
import Cafe2 from './Cafe2'
import Cafe3 from './Cafe3'


const LCafe:React.FC = () => {

    
    return (
    <Container>
        <Cafe1 />
        <Cafe2 />
        <Cafe3 />
    </Container>
    );
};

export default LCafe;

const Container = styled.div `
    overflow: hidden;
    position: relative;
    padding: 0 50px;
    top: 26rem;
`

