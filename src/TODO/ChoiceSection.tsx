import React from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';

const ChoiceSection:React.FC = () => {
    return (
            <ChoiceWrap>
                <ChoiceDiv>
                    <ChoiceImg></ChoiceImg>
                    <ChoiceTextDiv>
                        <ChoiceTextH2></ChoiceTextH2>
                        <ChoiceTextP></ChoiceTextP>
                    </ChoiceTextDiv>
                </ChoiceDiv> 
                <ChoiceDivS>
                    <ChoiceImgS></ChoiceImgS>
                    <ChoiceTextDivS>
                        <ChoiceTextH2S></ChoiceTextH2S>
                        <ChoiceTextPS></ChoiceTextPS>
                    </ChoiceTextDivS>
                </ChoiceDivS> 
            </ChoiceWrap>
    );
};


export default ChoiceSection;

const ChoiceWrap = styled.div `
position: relative;
top: 15rem;
display: flex;
flex-direction: column;
width: 100vw;
height: 100rem;
display: flex;
justify-content: space-around;
object-fit: cover;
align-content: space-between;
overflow: hidden;
margin-bottom: 10rem;
`
///////////////////////////////////////////
const ChoiceDiv = styled.div `
position: relative;
display: flex;
height: 100%;
padding: 0 5rem;
`

const ChoiceImg = styled.div `
position: absolute;
top: 30%;
left: 45%;
width: 50%;
height: 45rem;
/* height: 90%; */
background-image: url('./img/img40.jpg');
background-position: center;
background-size: cover;
border-radius: 5px;
`
///////////////////////////////////////////
const ChoiceTextDiv = styled.div `
position: relative;
    top: 28%;
    left: -23%;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, .3);
    width: 26rem;
    height: 20rem;
   margin: 0 auto;
   padding: 5px 10px;
   border-radius: .5rem;
`

const ChoiceTextH2 = styled.h2 `

`

const ChoiceTextP = styled.p `

`
///////////////////////////////////////////
///////////////////////////////////////////
const ChoiceDivS = styled.div `
position: relative;
display: flex;
height: 100%;
padding: 0 5rem;

`
///////////////////////////////////////////
const ChoiceImgS = styled.div `
position: absolute;
top: -10%;
left: 5%;
width: 50%;
/* height: 90%; */
height: 45rem;
background-image: url('./img/img41.jpg');
background-position: center;
background-size: cover;
border-radius: 5px;
`
///////////////////////////////////////////
const ChoiceTextDivS = styled.div `
position: relative;
    top: 13%;
    left: 22%;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, .3);
    width: 28rem;
    height: 20rem;
   margin: 0 auto;
   padding: 5px 10px;
   border-radius: .5rem;
`

const ChoiceTextH2S = styled.h2 `

`

const ChoiceTextPS = styled.p `

`