import React from 'react';
import {StyleProvider} from '../context/StyleContext';
import THeader from './THeader';
import TNav from './TNav'
import TodoMain from './TodoMain'
import TFooter from './TFooter'
import {motion} from "framer-motion";
import styled from 'styled-components'

const Todo:React.FC = () => {
    return (
        <motion.div
      animate={{ opacity:1 }}
      initial={{ opacity:0 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
          <StyleProvider>
            <All>
           <THeader />
           <TNav />
           <TodoMain />
          <TFooter />
          </All>
          </StyleProvider>
           </motion.div>
    );
};

export default Todo;

const All = styled.div `
  background-color: #d0faec;
  height: 100vh;
`