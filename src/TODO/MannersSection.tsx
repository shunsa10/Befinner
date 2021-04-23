import React from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';


const MannersSection:React.FC = () => {
    return (
            <MannersWrap>
               <MannersDiv>
                   <MannersImg></MannersImg>
                    <MannersTextDiv>
                        <MannersTextH2></MannersTextH2>
                        <MannersTextP></MannersTextP>
                    </MannersTextDiv>
               </MannersDiv>
           </MannersWrap>
    );
};


export default MannersSection;


const MannersWrap = styled.div `
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
margin-top: 8rem;
`
///////////////////////////////////////////
const MannersDiv = styled.div `
position: relative;
display: flex;
height: 50rem;
top: -8rem;
`


const MannersImg = styled.div `
width: 55%;
height: 80%;
background-image: url('./img/img70.jpg');
background-position: 50% 70px;
background-size: cover;
border-radius: 5px;
`
///////////////////////////////////////////
const MannersTextDiv = styled.div `
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, .3);
    width: 45%;
    height: 79%;
   margin: 0 auto;
   padding: 5px 10px;
   border-radius: .5rem;
`

const MannersTextH2 = styled.h2 `

`

const MannersTextP = styled.p `

`

