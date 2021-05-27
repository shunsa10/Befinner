import React, { useRef, useEffect } from 'react';
import styled, {css} from 'styled-components'
import { sp, tab } from "../media";
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


type ToggleProps = {
    Reviews?: boolean
}

const Cafe3:React.FC = () => {


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
            scrollTrigger: {
                id: `TextDiv3`,
                trigger: el,
                start: 'top center+=200',
                toggleActions: 'play none none reverse',
                // markers: true
            }
        });
    });
   
  }, [])
    
  const addToRefs = (el: never) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el)
    }
  };



    return (
      <>
        <ContentDiv>
          <TitleTextDiv className="SD">
            <TextDiv3 ref={addToRefs}>
              <BannerH2 ref={addToRefs}>
                D-smile
                <br />
                in zaimokuza
              </BannerH2>
              <BannerP ref={addToRefs}>
                ビーフカレーは自家製であの珊瑚礁のようなスパイシーさ
                <br />
                を感じます。
                <br />
                また、チーズケーキなどの海から上がった疲れた体に甘い
                <br />
                ものを入れたい時にはうってつけのものもある。
                <br />
                
              </BannerP>
              <BannerA href="https://tabelog.com/kanagawa/A1404/A140402/14077655/">
                READ NORE
              </BannerA>
              <Icons>
                <IconsUl>
                  <IconsLi>
                    <IconsA href="https://www.instagram.com/dsmile_kamakura/">
                      <IconsImg src={"./img/instagram.svg"} />
                    </IconsA>
                  </IconsLi>
                </IconsUl>
              </Icons>
            </TextDiv3>

            <BannerImgDiv3 ref={addToRefs}>
              <BannerImg3 src={"./img/IMG_9220.png"} /> ////
            </BannerImgDiv3>
          </TitleTextDiv>
        </ContentDiv>
      </>
    );
}

export default Cafe3;


const ContentDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
    overflow: hidden;
`

const TitleTextDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  ${sp`
  height: 100%;
`}
`;



const TextDiv3 = styled.div<ToggleProps>`
  width: 50%;
  z-index: 1;
  ${sp`
  position: absolute;
  top: 5rem;    
  height: 48%;
  width: 100%;
  backdrop-filter: blur(5px);
  z-index: 10;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
`}
`;


const BannerH2 = styled.h2`
  font-size: 54px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2em;
  color: #333;
  ${sp`
  color: #fff;
  font-size: 34px;
`}
`;
const BannerP = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.8em;
  margin: 20px 0;
  ${sp`
  color: #fff;
font-size: .7rem;
margin: 10px 0;
`}
`;
const BannerA = styled.a`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 1rem;
  text-decoration: none;
  padding-left: 15px;
  transition: 1s;
  ${sp`
  color: #fff;
`}
  &:hover {
    color: #81ffd5;
  }
`;

const BannerImgDiv3 = styled.div`
  position: relative;
  top: 5rem;
  width: 50%;
  height: 540px;
  ${sp`
   width: 100%;
`}
`;


const BannerImg3 = styled.img<ToggleProps> `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 80%;
    transition: .5s;
    border-radius: 5px;
    
   
    ${({Reviews}) => Reviews ? css `

    ` : ''}

`


const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px 0;
  ${sp`
  margin-left: 50%;
`}
`;

const IconsUl = styled.ul `
position: relative;
top: -2.6rem;
left: -6rem;
display: flex;
`

const IconsLi = styled.li `
list-style: none;
margin-right: 20px;
`

const IconsA = styled.a `

`

const IconsImg = styled.img `
width: 30px;
display: inline-block;
max-height: 24px;
transition: .5s ease-in-out;
&:hover {
    transform: rotateY(-10px);
}
`
