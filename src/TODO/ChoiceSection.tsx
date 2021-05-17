import React, { useRef, useEffect } from "react";
import styled from 'styled-components'


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {useTest} from './TodoHooks/test'
// import { pc, sp, tab } from '../media';


gsap.registerPlugin(ScrollTrigger);


const ChoiceSection:React.FC = () => {

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
      revealRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
          },
          {
            duration: 2,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              id: `TextDiv2`,
              trigger: el,
              start: "top center+=100",
              toggleActions: "play none none reverse",
              // markers: true
            },
          }
        );
      });
      console.log("on");
    }, []);

    const addToRefs = (el: never) => {
      if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
      }
    };
    return (
      <ChoiceWrap>
        <TodosT>
          <TodosTH2 ref={addToRefs}>
            Before everything else, getting ready is the secret of success.
          </TodosTH2>
        </TodosT>
        <ChoiceDiv>
          <ChoiceImg ref={addToRefs}></ChoiceImg>
          <ChoiceTextDiv>
            <ChoiceTextH2 ref={addToRefs}>01 ボードの選び方</ChoiceTextH2>
            <ChoiceTextP ref={addToRefs}>
              まず肝心なのは浮力。十分な浮力がないと波に乗るハードルが一気に
              跳ね上がる。
              <br />
              <br />
              <Span>
                7f以上で全体的に幅広があり、ボードの反りが少なく厚さがあるものがベストです。
              </Span>
              <br />
              かなり要約しましたがここまで店員さんに話せればあなたにベストな相棒を選んでくれます。
              <br />
              <br />
              これで楽しめるのですが、安定感に全振してるので操作性や派手な技をしたい方は２本目
              を買いましょう。
              <br />
              攻めたボードで上達せず辞めた人はかなりいます。
            </ChoiceTextP>
          </ChoiceTextDiv>
        </ChoiceDiv>
        <ChoiceDivS>
          <ChoiceImgS ref={addToRefs}></ChoiceImgS>
          <ChoiceTextDivS>
            <ChoiceTextH2S ref={addToRefs}>02 波のコンディション</ChoiceTextH2S>
            <ChoiceTextPS>
            </ChoiceTextPS>
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
const TodosT = styled.div`
  position: relative;
  display: flex;
  padding: 0 5rem;
  margin: 0 auto;
`;
const TodosTH2 = styled.h2`
  content: "data-en";
  font-family: cuisine, sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 1.5rem;
`;

const ChoiceDiv = styled.div `
position: relative;
top: -5.3em;
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
    width: 28rem;
    height: 23rem;
   margin: 0 auto;
   padding: 5px 10px;
   border-radius: .5rem;
`

const ChoiceTextH2 = styled.h2 `
padding-left: 5px;
`

const ChoiceTextP = styled.p `
padding: 5px;
padding-bottom: 10px;
margin: 0;
font-size: 1rem;
text-align: left;
line-height: 1.6rem;
`

const Span = styled.span `
font-weight: bold;
margin: 5px 0;
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