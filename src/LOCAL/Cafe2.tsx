import React from 'react';
import styled, {css} from 'styled-components'



type ToggleProps = {
    Reviews?: boolean
}

const Cafe2:React.FC = () => {
    return (
        <>
    <ContentDiv>
      <TitleTextDiv>

        <BannerImgDiv2>
                <BannerImg2 src={'./img/IMG_4334.png'} />  ////
        </BannerImgDiv2>

        <TextDiv2> 
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
        </TextDiv2>

     </TitleTextDiv>
   </ContentDiv>
        </>
    )
}

export default Cafe2;


const ContentDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`

const TitleTextDiv = styled.div `
    display: flex;
    width: 100%;
    position: relative;
    top: 1.4rem;
  
`



const TextDiv2 = styled.div `
 margin-left: 20px;
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

const BannerImgDiv2 = styled.div `
    position: relative;
    top: 5rem;
    width: 50%;
    height: 400px;

`


const BannerImg2 = styled.img<ToggleProps> `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
