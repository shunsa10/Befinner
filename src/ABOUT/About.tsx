import React from 'react';
import {StyleProvider} from '../context/StyleContext';
import AHeader from './AHeader';
import ANav from './ANav'
import AMain from './AMain'
import AProfile from './AProfile'
import styled, {css} from 'styled-components'
import {motion} from "framer-motion";


const About:React.FC = () => {
    return (
    <motion.div
      animate={{ opacity:1 }}
      initial={{ opacity:0 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}>
      <StyleProvider>
        <MainDiv>
           <AboutMainSection>
              <AHeader />
              <ANav />
              <AMain />
           </AboutMainSection>

           <AboutProSection>
              <AProfile />
           </AboutProSection>

        </MainDiv>
      </StyleProvider>
    </motion.div>
    );
};

export default About;

const MainDiv = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    width: 100%;
    height: 100%;

`
const AboutMainSection = styled.section `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    width: 100%;
    height: 100%;

`
const AboutProSection = styled.section `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    width: 100%;
    height: 100%;

`
