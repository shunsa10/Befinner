import React from 'react'
import TodoTitleSection from './TodoTitleSection'
import ChoiceSection from './ChoiceSection'
import ConditionSection from './ConditionSection'
import DangerSection from './DangerSection'
import MannersSection from './MannersSection'
import GadgetSection from './GadgetSection'
import styled from 'styled-components'

const TodoMain:React.FC = () => {
 
    return (
        <>
        <TodoMainDiv>
           <TodoTitleSection />
           <ChoiceSection />
           <ConditionSection />
           <DangerSection />
           <MannersSection />
           <GadgetSection />
        </TodoMainDiv>
        </>
    );
};


export default TodoMain;

const TodoMainDiv = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    width: 100vw;
    height: 100vh;
    background-image: url('../img/img100.jpg');
    background-size: cover;
`