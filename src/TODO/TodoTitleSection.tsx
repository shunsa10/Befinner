import React from 'react'
import styled from 'styled-components'
import { sp,tab } from '../media';

const TodoTitleSection:React.FC = () => {
    return (
        <TitleWrap>
{/* 
            <H2TextDiv>
                <H2Text>To beginners</H2Text>
            </H2TextDiv> */}

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

const TitleDiv = styled.div `
position: relative;
top: 1rem;
display: flex;
height: 100vh;
padding: 0 6rem;

`
///////////////////////////////////////////
const TitleImg = styled.div`
  position: absolute;
  top: 3rem;
  width: 60%;
  height: 90%;
  background-image: url("./img/img31.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  ${sp`
display: none;
`}
`;
///////////////////////////////////////////
const TitleText = styled.div `
position: relative;
top: 1rem;
left: 50%;
width: 50%;
height: 40%;

`;
const MainText = styled.div `
position: relative;
`
const YourOnlyP = styled.p`
  content: attr(data-en);
  font-family: saffran, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 5rem;
  margin-left: 8rem;
  margin-bottom: 0;
  ${tab`
  margin-left: 1rem;
`}
  ${sp`
  margin-left: -10rem;
  font-size: 4.5rem;
`}
`;
const LiveP = styled.p`
  content: attr(data-en);
  font-family: saffran, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 5rem;
  margin-left: 25rem;
  margin-top: 0;
  margin-bottom: 0;
  ${tab`
  margin-left: 15rem;
`}
  ${sp`
  margin-left: -6rem;
  font-size: 4rem;
`}
`;
const OnceP = styled.p`
  content: attr(data-en);
  font-family: saffran, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 5rem;
  margin-left: 19rem;
  margin-top: 0;
  ${tab`
  margin-left: 9rem;
`}
  ${sp`
  margin-left: -2rem;
  font-size: 4rem;
`}
`;
const YoloPbox = styled.div`
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
  border-radius: 0.5rem;
  left: 16%;
  top: -29%;
  ${tab`
 left: 0;
`}
  ${sp`
  width: 22rem;
  height: 9rem;
  left: -11.6rem;
  top: 1.6rem;
  font-size: .9rem;
`}
`;
const YoloP = styled.p `
content: attr(data-en);
font-family: a-otf-ryumin-pr6n, serif;
font-weight: 300;
font-style: normal;
text-align: center;
`
