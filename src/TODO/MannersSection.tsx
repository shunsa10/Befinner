import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import { sp } from '../media';
import { tab } from '../media';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




const MannersSection:React.FC = () => {

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
      <MannersWrap>
        <MannersDiv>
          <MannersImg ref={addToRefs}></MannersImg>
          <MannersTextDiv ref={addToRefs}>
            <MannersTextH2>05 ローカルルール</MannersTextH2>
            <MannersTextP>
              <Span>一つの波には一人までというローカルルールがあります。</Span>
              <br />
              ですが正確には一つの波で同じ方向は一人までという意味
              <br />
              なので十分に距離が取れていれば安全面で問題なしです。
              <br />
              <br />
              率先して人が少ないところに行くのはとても大切です。初
              <br />
              心者として安全も確保できますし、
              <Span>
                マナーとしてもよく見
                <br />
                られます。
              </Span>
              <br />
              <br />
              サーファー同士の挨拶の欠かせません見た目はいかつくて
              <br />
              怖そうな人が多いですが
              <Span>
                みんな心からサーフィンを楽しめ
                <br />
                る、優しい人です。
              </Span>
              <br />
              ルールは場所によってもまちまちで過剰なところはあります
              <br />
              が、どれも一歩間違えれば命に関わってくるのでルールを守る
              <br />
              意識だけでもしておきましょう。
            </MannersTextP>
          </MannersTextDiv>
        </MannersDiv>
      </MannersWrap>
    );
};


export default MannersSection;

//ローカルルールに関するdiv
const MannersWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  justify-content: space-around;
  object-fit: cover;
  align-content: space-between;
  overflow: hidden;
  margin-top: 8rem;
  ${sp`
  top: -45rem;
  flex-direction: row;
  `}
`;
///////////////////////////////////////////
const MannersDiv = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  top: -8rem;
  ${sp`
  flex-direction: column;
  `}
`;


const MannersImg = styled.div`
  width: 55%;
  height: 84.3%;
  background-image: url("./img/img70.jpg");
  background-position: 50% 70px;
  background-size: cover;
  border-radius: 5px;
  ${tab`
  width: 45%;
  
  `}
  ${sp`
  width: 100%;
  height: 45rem;
  `}
`;
///////////////////////////////////////////
const MannersTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  z-index: 1;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.3);
  width: 45%;
  height: 83%;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 0.5rem;
  ${tab`
  width: 55%;
  
  `}

  ${sp`
  position: relative;
  width: 100%;
  height: 35rem;
  `}
`;

const MannersTextH2 = styled.h2`
  position: relative;
  top: 7rem;
  font-family: ta-kai-regular, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  padding-left: 5px;
  z-index: 10;
  margin: 10px 45px;
  ${tab`
  top: 8rem;
  font-size: 1.7rem;
  `}
  ${sp`
  top: 1rem;
  font-size: 1.3rem;
  `}
`;

const MannersTextP = styled.p`
  position: relative;
  top: 10rem;
  padding: 5px;
  padding-bottom: 10px;
  font-size: 1rem;
  text-align: left;
  line-height: 1.6rem;
  margin: 0 auto;
  ${tab`
  top: 10rem;
  font-size: .9rem;
  line-height: 1.1rem;
  `}
  ${sp`
  top: 1rem;
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



