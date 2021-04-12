import React from 'react';
import {StyleProvider} from '../context/StyleContext';
import THeader from './THeader';
import TNav from './TNav'
import {motion} from "framer-motion";


const Todo:React.FC = () => {
    return (
        <motion.div
      animate={{ opacity:1 }}
      initial={{ opacity:0 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
            <StyleProvider>
           <THeader />
           <TNav />
           </StyleProvider>
           </motion.div>
    );
};

export default Todo;