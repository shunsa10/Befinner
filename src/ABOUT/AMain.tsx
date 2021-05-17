import React from 'react';
import styled from 'styled-components'
import {useRef, useEffect} from 'react'


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




const Main:React.FC = () => {

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
              id: `TextDiv3`,
              trigger: el,
              start: "top center+=500",
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
      <>
        <Img src={"./img/img1.jpg"} alt="" />
        <TextDiv ref={addToRefs}>
          <AboutTitleText>ABOUT</AboutTitleText>
          <AboutText>
            2020.6月以降アウトドアの趣味に火が付き
            <br />
            サーフィンの世界も人気が出てきました。
            <br />
            初めてサーフィンを始める人がいる中、聞き
            <br />
            慣れない単語が多いのでなるべく、ビギナーにも
            <br />
            わかりやすいようなサイトにしました。
            <br />
            サーフィンをする第一歩に慣ればと思います。
            <br />
          </AboutText>
        </TextDiv>
      </>
    );
};

export default Main;


const Img = styled.img `
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 40rem;
    object-fit: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const TextDiv = styled.div `
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    width: 25rem;
    height: 15rem;
   margin: 0 auto;
   margin-top: 200px;
   border-radius: .5rem;
`
const AboutTitleText = styled.h2`
  content: "data-en";
  font-family: scriptorama-markdown-jf, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-weight: lighter;
  font-size: 3.5rem;
  letter-spacing: 5px;
  margin: 0 auto;
  opacity: 0.8;
`;

const AboutText = styled.p`
  content: attr(data-en);
  font-family: a-otf-ryumin-pr6n, serif;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 1px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  opacity: 0.7;
`;