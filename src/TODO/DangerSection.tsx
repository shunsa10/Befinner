import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import { sp, tab } from '../media';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const DangerSection:React.FC = () => {

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
      <DangerWrap>
        <DangerDiv>
          <DangerTextDiv ref={addToRefs}>
            <DangerTextH2>04 危険な場所</DangerTextH2>
            <DangerTextP>
              <Span>
                海底が岩場になっているところは波が立ちやすく、人気のスポ
                <br />
                ットの一つ
              </Span>
              ですが、初心者の型にはおすすめできません。波に
              <br />
              飲まれて海底に叩きつけられれば大怪我です。
              <br />
              <br />
              もし岩場ですることがあれば深いところを選びましょう。岩場
              <br />
              のようなところにいる人は比較的その土地に慣れている人が多
              <br />
              い印象があるのでコミュニケーションをとって安全を確保しま
              <br />
              しょう。
            </DangerTextP>
          </DangerTextDiv>
          <DangerImg ref={addToRefs}></DangerImg>
        </DangerDiv>
      </DangerWrap>
    );
};


export default DangerSection;


const DangerWrap = styled.div`
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
  ${sp`
  top: -20rem;
  `}
`;
///////////////////////////////////////////
const DangerDiv = styled.div`
  position: relative;
  display: flex;
  height: 50rem;
  padding: 0 5rem;
  top: -8rem;
  ${sp`
  top: -6rem;
  width: 100%;
  `}
`;

const DangerImg = styled.div`
  position: absolute;
  top: 25%;
  left: 11%;
  width: 55%;
  height: 60%;
  background-image: url("./img/img60.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  ${sp`
  top: 12%;
  width: 65%;
  height: 25rem;
  left: 0;
  `}
`;
///////////////////////////////////////////
const DangerTextDiv = styled.div`
  position: relative;
  top: 70%;
  left: 25%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  z-index: 1;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.3);
  width: 29rem;
  height: 20rem;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 0.5rem;
  ${sp`
  top: 20%;
  left: -20%;
  width: 90%;
  height: 16rem;
  `}
`;

const DangerTextH2 = styled.h2`
  font-family: ta-kai-regular, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  padding-left: 5px;
  ${sp`
  font-size: 1.7rem;
  `}
`;

const DangerTextP = styled.p`
  padding: 5px;
  padding-bottom: 10px;
  margin: 0;
  font-size: 1rem;
  text-align: left;
  line-height: 1.6rem;
  ${sp`
  font-size: .7rem;
  line-height: 1.3rem;
  `}
`;

const Span = styled.span`
  font-weight: bold;
  margin: 5px 0;
  ${sp`
  font-size: .7rem;
  line-height: 1.3rem;
  `}
`; 