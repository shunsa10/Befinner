import React from 'react';
import styled, {css} from 'styled-components'
import {ReviewContext} from '../context/ReviewCotext'
import {useContext} from 'react'

import {useEffect,useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



type ToggleProps = {
    Reviews?: boolean
}

const Cafe3:React.FC = () => {

    useEffect(() => {
        if(process) {
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    }, [])

  const setAnimation = () => {
    gsap.fromTo(
      '#SD',
      { opacity: 0, y: 10 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#SD',
          start: 'top 50%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom 50%', //要素のボトムが、画面の中央まできたら終了
          onEnter: () => {
            console.log('scroll In')
          },
          onEnterBack: () => {
            console.log('scroll Back')
          },
        },
      }
    )
  }

    return (
        <>
    <ContentDiv>
      <TitleTextDiv className='SD'>

        <TextDiv3> 
            <BannerH2>
                EAT Healthy<br />
                Stay Healthy
            </BannerH2>
                <BannerP>
                     This is really nice Sorry to distrub, I made this website but sir<br />
                     Facebook, Instagram and twitter.symbol is so <br />
                     long.... Please help mePlease provide solution <br />
                </BannerP>
                <BannerA>READ NORE</BannerA>
                <Icons>
                    <IconsUl>
                        <IconsLi><IconsA><IconsImg src={'./img/instagram.svg'} /></IconsA></IconsLi>
                        <IconsLi><IconsA><IconsImg src={'./img/instagram.svg'} /></IconsA></IconsLi>
                    </IconsUl>
                </Icons>
        </TextDiv3>

            <BannerImgDiv3>
                <BannerImg3 src={'./img/IMG_9220.png'} />  ////
            </BannerImgDiv3>


      </TitleTextDiv>
    </ContentDiv>
        </>
    )
}

export default Cafe3;


const ContentDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
    overflow: hidden;
`

const TitleTextDiv = styled.div `
width: 100%;
height: 100%;
    position: relative;
    display: flex;
`



const TextDiv3 = styled.div<ToggleProps> `
 width: 50%;
`


const BannerH2 = styled.h2 `
font-size: 54px;
text-transform: uppercase;
font-weight: 800;
line-height: 1.2em;
color: #333;

`
const BannerP = styled.p `
font-size: 1rem;
color: #333;
line-height: 1.8em;
margin: 20px 0;

`
const BannerA = styled.a `
position: relative;
display: inline-block;
text-transform: uppercase;
font-weight: 700;
color: #333;
letter-spacing: 1px;
font-size: 1rem;
text-decoration: none;
padding-left: 15px;
&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    background: #80d833;
    z-index: -1;
    transition: .5s ease-in-out;
    &::before:hover {
        width: 100%;
    }
}`

const BannerImgDiv3 = styled.div `
    position: relative;
    top: 5rem;
    width: 50%;
    height: 540px;
    
   
`


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


const Icons = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-left: 50px 0;

`

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