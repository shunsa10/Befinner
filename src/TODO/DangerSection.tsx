import React from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';

const DangerSection:React.FC = () => {
    return (
        <DangerWrap>
               <DangerDiv>
                    <DangerTextDiv>
                        <DangerTextH2></DangerTextH2>
                        <DangerTextP></DangerTextP>
                    </DangerTextDiv>
                   <DangerImg></DangerImg>
               </DangerDiv>
           </DangerWrap>
          
    );
};


export default DangerSection;


const DangerWrap = styled.div `
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
const DangerDiv = styled.div `
position: relative;
display: flex;
height: 50rem;
padding: 0 5rem;
top: -8rem;
`

const DangerImg = styled.div `
position: absolute;
top: 25%;
left: 11%;
width: 55%;
height: 60%;
background-image: url('./img/img60.jpg');
background-position: center;
background-size: cover;
border-radius: 5px;
`
///////////////////////////////////////////
const DangerTextDiv = styled.div `
position: relative;
    top: 70%;
    left: 25%;
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

const DangerTextH2 = styled.h2 `

`

const DangerTextP = styled.p `

`