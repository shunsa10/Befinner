import React from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';


const ConditionSection:React.FC = () => {
    return (
           <ConditionWrap>
               <ConditionDiv>
                   <ConditionImg></ConditionImg>
                    <ConditionTextDiv>
                        <ConditionTextH2></ConditionTextH2>
                        <ConditionTextP></ConditionTextP>
                    </ConditionTextDiv>
               </ConditionDiv>
           </ConditionWrap>
    );
};


export default ConditionSection;


const ConditionWrap = styled.div `
position: relative;
display: flex;
flex-direction: column;
width: 100vw;
height: 100%;
display: flex;
justify-content: space-around;
object-fit: cover;
align-content: space-between;
overflow: hidden;
`
///////////////////////////////////////////
const ConditionDiv = styled.div `
position: relative;
display: flex;
height: 50rem;
padding: 0 5rem;
top: -8rem;
`

const ConditionImg = styled.div `
position: absolute;
top: 50%;
left: 35%;
width: 55%;
height: 60%;
background-image: url('./img/img50.jpg');
background-position: center;
background-size: cover;
border-radius: 5px;
`
///////////////////////////////////////////
const ConditionTextDiv = styled.div `
position: relative;
    top: 25%;
    left: -24%;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, .3);
    width: 29rem;
    height: 20rem;
   margin: 0 auto;
   padding: 5px 10px;
   border-radius: .5rem;
`

const ConditionTextH2 = styled.h2 `

`

const ConditionTextP = styled.p `

`