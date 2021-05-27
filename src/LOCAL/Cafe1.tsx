import React, { useRef, useEffect } from 'react';
import styled, {css} from 'styled-components'
import { sp, tab } from "../media";
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


type ToggleProps = {
    Reviews?: boolean
}


const Cafe1:React.FC = () => {

    const revealRefs = useRef([]);
  revealRefs.current = []

   useEffect(() => {

    revealRefs.current.forEach((el) => {
      gsap.fromTo(el, {
        autoAlpha: 0,
      }, {
         duration: 1,
         autoAlpha: 1,
         ease: 'none',
    scrollTrigger: {
                id: `TextDiv1`,
                trigger: el,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
        }
      });
console.log("on");
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
          <TitleTextDiv>
            <TextDiv1 ref={addToRefs}>
              <BannerH2 ref={addToRefs}>
                GELATERIA
                <br />
                SANTI
              </BannerH2>
              <BannerP ref={addToRefs}>
                駅から海にかけて伸びる御成通りは鎌倉の古い商店街です。
                <br />
                その脇道にポツンとあるのがアイスクリーム専門店SANTI。 <br />
                見慣れない名前のアイスが14種類ほどあり、すべてお店の <br />
                アイスマシーンで作られます。
                <br />
                私のおすすめはローズマリーハニーで、蜂蜜の甘さとロー
                <br />
                ズマリーの風味がベストマッチしています。
              </BannerP>
              <BannerA href="https://gelateriasanti.com/">READ NORE</BannerA>
              <Icons>
                <IconsUl>
                  <IconsLi>
                    <IconsA href="https://www.instagram.com/gelateriasanti/?hl=ja">
                      <IconsImg src={"./img/instagram.svg"} />
                    </IconsA>
                  </IconsLi>
                </IconsUl>
              </Icons>
            </TextDiv1>
            <BannerImgDiv1 ref={addToRefs}>
              <BannerImg1 src={"./img/IMG_6386.png"} /> ////
            </BannerImgDiv1>
          </TitleTextDiv>
        </ContentDiv>
      </>
    );
}

export default Cafe1;


const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: -2rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const TitleTextDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  ${sp`
  height: 100%;
`}
`;
///////////////////////////////////////

const TextDiv1 = styled.div`

  width: 50%;
  z-index: 1;
  ${sp`
  position: absolute;
  top: 5rem;    
  height: 60%;
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


///////////////////////////////////////

const BannerImgDiv1 = styled.div`
  position: relative;
  top: 5rem;
  height: 550px;
  width: 50%;
  ${sp`
   width: 100%;
`}
`;


const BannerImg1 = styled.img<ToggleProps> `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 90%;
    border-radius: 5px;
    ${({Reviews}) => Reviews ? css `

    ` : ''}

`
///////////////////////////////////////

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

const IconsImg = styled.img`
  width: 30px;
  display: inline-block;
  max-height: 24px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: rotateY(-10px);
  }
`;
