
import React from 'react';
import Header from './Header'
import Nav from './Nav'
import Title from './Title'
import InfoSNS from './InfoSNS'
import {StyleProvider} from '../context/StyleContext';
import styled from 'styled-components'
import {motion} from "framer-motion";


const Home:React.FC = () => {
    return (
        <motion.div
      animate={{ opacity:1 }}
      initial={{ opacity:0 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
        <StyleProvider>
            <Section>
                <Header />
                <Title />
                <Nav />
                <InfoSNS />
            </Section>
        </StyleProvider>
        </motion.div>
    )
}

export default Home;

const Section = styled.section `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    width: 100%;
    height: 100%;

`
