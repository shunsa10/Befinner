import React from 'react'
import styled from 'styled-components'
import { tab } from '../media';

const TodoTitleSection:React.FC = () => {
    return (
        <TitleWrap>

            <H2TextDiv>
                <H2Text>To beginners</H2Text>
            </H2TextDiv>

            <TitleDiv>
                <TitleImg></TitleImg>

                <TitleText>
                    <MainText>
                        <YourOnlyP>YourOnly</YourOnlyP>
                        <LiveP>Live</LiveP>
                        <OnceP>Once.</OnceP>
                    </MainText>
                    <YoloPbox>
                    <YoloP>
                        意味は、人生は一度きり。<br />
                        あなたは多くの楽しみを逃しているかもしれません。<br />
                        満足のいく人生を生きるためには、<br />
                        それなりのリスクを負わなければなりません。<br />
                        そんな事を伝える座右の銘として使われます。<br />
                    </YoloP>
                    </YoloPbox>
                </TitleText>
            </TitleDiv>
        </TitleWrap>
    );
};
export default TodoTitleSection;

const TitleWrap = styled.div `
position: relative;
display: flex;
flex-direction: column;
top: 9rem;
width: 100vw;
height: 100%;
display: flex;
justify-content: space-around;
object-fit: cover;
align-content: space-between;
overflow: hidden;
`
const H2TextDiv = styled.div `
position: relative;
width: 80%;
display: flex;
justify-content: center;
padding: 0 5rem;
text-align: center;
overflow: hidden;
margin: 0 auto;
`
const H2Text = styled.h2 `
    position: relative;
    bottom: 1rem;
    width: 100%;
    font-family: "Times New Roman",Times,serif;
    font-weight: normal;
    letter-spacing: 0.08em;
    border-bottom: 1px solid rgba(35, 24, 21, 0.3);
    text-align: center;
    z-index: 9;
`
const TitleDiv = styled.div `
position: relative;
top: 1rem;
display: flex;
height: 100vh;
padding: 0 6rem;

`
///////////////////////////////////////////
const TitleImg = styled.div `
position: absolute;
top: 3rem;
width: 60%;
height: 90%;
background-image: url('./img/img31.jpg');
background-position: center;
background-size: cover;
border-radius: 5px;
`
///////////////////////////////////////////
const TitleText = styled.div `
position: relative;
top: 3rem;
left: 50%;
width: 50%;
height: 40%;

`;
const MainText = styled.div `
position: relative;
`
const YourOnlyP = styled.p `
content: attr(data-en);
font-family: saffran, sans-serif;
font-weight: 800;
font-style: normal;
font-size: 5rem;
margin-left: 8rem;
margin-bottom: 0;
${tab `
  margin-left: 1rem;
`}

`
const LiveP = styled.p `
content: attr(data-en);
font-family: saffran, sans-serif;
font-weight: 800;
font-style: normal;
font-size: 5rem;
margin-left: 25rem;
margin-top: 0;
margin-bottom: 0;
${tab `
  margin-left: 15rem;
`}
`
const OnceP = styled.p `
content: attr(data-en);
font-family: saffran, sans-serif;
font-weight: 800;
font-style: normal;
font-size: 5rem;
margin-left: 19rem;
margin-top: 0;
${tab `
  margin-left: 9rem;
`}
`
const YoloPbox = styled.div `
position: relative;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 10;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    width: 26rem;
    height: 10rem;
   margin: 0 auto;
   padding: 5px 10px;
   border-radius: .5rem;
    left: 16%;
    top: -29%;
${tab `
 left: 0;
`}
`
const YoloP = styled.p `
content: attr(data-en);
font-family: a-otf-ryumin-pr6n, serif;
font-weight: 300;
font-style: normal;
text-align: center;
`
