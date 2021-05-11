import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'


import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);



const LMain:React.FC = () => {


    const revealRefs = useRef([]);
  revealRefs.current = []

   useEffect(() => {

    revealRefs.current.forEach((el) => {
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
          duration: 1,
            autoAlpha: 1,
            ease: 'none',
            delay :2,
            scrollTrigger: {
                id: `WrapTextDiv`,
                trigger: el,
                start: 'top center+=200',
                toggleActions: 'play none none reverse',
                // markers: true
            }
        });
    });
    console.log("on");
  }, [])
    
  const addToRefs = (el: never) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el)
    }
  };
    return (
    <WrapTextDiv>
            <H2TextDiv>
            <H2Text ref={addToRefs}>Local Cafe</H2Text>
            </H2TextDiv>
        <TextDiv>
            <LocalTitleText ref={addToRefs}>地元民のみぞ知る憩いの場</LocalTitleText>
            <LocalText ref={addToRefs}>
                普段からお店の入れ替わりが激しい駅前とは違い,<br />
                材木座近辺では地元に根強いたカフェが人知れず<br />
                オープンしています。地元以外の人は入りづらいのではと<br />
                思われがちですがそれを扶植するお気に入りのカフェを紹介します。<br />
                
            </LocalText>
        </TextDiv>
    </WrapTextDiv>
    )
}

export default LMain;

const WrapTextDiv = styled.div `
width: 100%;
`
const TextDiv = styled.div `
   position: relative;
   top: 10rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 50%;
    height: 15rem;
    border-radius: .5rem;
    margin: 0 auto;
`

const H2TextDiv = styled.div `
position: relative;
top: 7rem;
display: flex;
justify-content: center;
padding: 0 5rem;
text-align: center;
overflow: hidden;

`
const H2Text = styled.h2 `
    width: 100%;
    height: 1rem;
    font-family: "Times New Roman",Times,serif;
    color: #fff;
    font-weight: normal;
    padding-top: -10px;
    padding-bottom: 15px;
    letter-spacing: 0.08em;
    border-bottom: 2px solid rgb(253, 253, 253);
    text-align: center;
    z-index: 9;
`
const LocalTitleText = styled.h2 `
content: attr(data-en);
font-family: a-otf-midashi-mi-ma31-pr6n, serif;
font-weight: 600;
font-style: normal;
font-size: 2rem;
color: #fff;
margin: 0 auto;


`

const LocalText = styled.p `
display: flex;
justify-content: center;
content: attr(data-en);
font-family: a-otf-midashi-mi-ma31-pr6n, serif;
font-weight: 300;
font-style: normal;
color: #fff;
letter-spacing: 3px;
line-height: 1.7;
text-align: center;
margin: 0 auto;

margin-top: 2rem;


`