import React from 'react'
import {StyleProvider} from '../context/StyleContext';
import {motion} from "framer-motion";
import LHeader from './LHeader'
import LNav from './LNav'
import LCafe from './LCafe'
import LRview from './LReview'
import LMain from './LMain'
import LFooter from './LFooter'
import styled from 'styled-components'


const Local:React.FC = () => {
    return (
<>
    <motion.div
            animate={{ opacity:1 }}
            initial={{ opacity:0 }}
            exit={{ opacity:0 }}
            transition={{ duration: 0.4}}>
      <StyleProvider>
        <LocalMainDiv>
            <LHeader />
            <LNav />
            <LMain />
            <LCafe />
            <LRview />
            <LFooter />
        </LocalMainDiv>
      </StyleProvider>
    </motion.div>

</>
    )
};


export default Local;


const LocalMainDiv = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    width: 100vw;
    height: 600px;
    background-image: url('../img/img130.jpg');
    background-size: cover;
`