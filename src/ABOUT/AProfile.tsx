import React from 'react';
import styled from 'styled-components'

import { FaTwitter, FaYoutube, FaInstagram　} from 'react-icons/fa';


const AProfile:React.FC = () => {
    return (
        <>
           <ProfilTitle>Profil</ProfilTitle>
       <ImlDiv> 
           <ProfilDiv>
                <ImgBxaIm>
                    <ImgBxImgIm src='./img/img4.jpg' />
                    <ProfilImg src={'./img/IMG_9665.jpeg'} alt="" />
               </ImgBxaIm>
                  <ProText>
                    <MyName>Shun Sato</MyName>
                    <MyBday>H10 1998.12.8</MyBday>
                    <MyPro>
                    えええええええええええええええええええええ<br />
                    えええええええええええええええええええええ<br />
                    gっっっっっっっっっっっっっっっっっっっっg<br />
                    gっっっっっっっっっっっっっっっっっっっっg<br />
                    </MyPro>
                  </ProText>
            </ProfilDiv>

           <HistoryDiv>
                    <HistoryImg src='./img/imgHis.jpg' />
               <ProBlur>
                   
               </ProBlur>
           </HistoryDiv>

           <YouTubeDiv>
            <ImgBxY>
                <ImgBxImgY src='./img/youtube.jpg' />
                <YoutubeTitle data-en="Recruit">YouTube</YoutubeTitle>
                <IconY>
                <FaYoutube
                        style={{
                            fontSize: 100,
                            color: 'rgb(205, 32, 31)',
                        }}/>
                </IconY>
            </ImgBxY>
            <ContentY>
                <ContentH2Y>YouTube</ContentH2Y>
                <ContentPY>
                    Lorem ipsum dolor sit
                    amet, consectur
                      adipidicing elit, sed do
                    eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua.
                </ContentPY>
                <ContentAY href="https://youtu.be/-IrpOjnarbg">Read More</ContentAY>
            </ContentY>
           </YouTubeDiv>

           <TwitterDiv>
              <ImgBxT>
                <ImgBxImgT src='./img/twitter.jpg' />
                <TwitterTitle>Twitter</TwitterTitle>
                  <IconT>
                <FaTwitter
                    style={{
                            fontSize: 100,
                            color: 'rgb(0, 172, 237)',
                        }}/>
                 </IconT>
              </ImgBxT>
            <ContentT>
                <ContentH2T>Twitter</ContentH2T>
                <ContentPT>
                    Lorem ipsum dolor sit
                    amet, consectur
                      adipidicing elit, sed do
                    eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua.
                </ContentPT>
                <ContentAT href="https://twitter.com/siyu_style">Read More</ContentAT>
            </ContentT>
           </TwitterDiv>
           
           <InstgramDiv>
               <ImgBxI>
                <ImgBxImgI src='./img/instgram.jpg' />
                <InstgramTitle>Instgram</InstgramTitle>
                  <IconI>
                 <FaInstagram
                    style={{
                            fontSize: 100,
                            color: 'rgb(198, 82, 154)',
                        }}/> 
                 </IconI>
              </ImgBxI>
            <ContentI>
                <ContentH2I>Instagram</ContentH2I>
                <ContentPI>
                    Lorem ipsum dolor sit
                    amet, consectur
                      adipidicing elit, sed do
                    eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua.
                </ContentPI>
                <ContentAI href="#">Read More</ContentAI>
            </ContentI>
           </InstgramDiv>

           <QiitaDiv>
               <ImgBxQ>
                <ImgBxImgQ src='./img/qiitaImg.jpg' />
                <QittaTitle>Qitta</QittaTitle>
                <IconQ>
                <QiitaImg></QiitaImg>
                </IconQ>
            </ImgBxQ>
            <ContentQ>
                <ContentH2Q>Qiita</ContentH2Q>
                <ContentPQ>
                    Lorem ipsum dolor sit
                    amet, consectur
                      adipidicing elit, sed do
                    eiusmod
                    tempor incididunt ut labore
                    et dolore magna aliqua.
                </ContentPQ>
                <ContentAQ href="https://qiita.com/shunsa10">Read More</ContentAQ>
            </ContentQ>
           </QiitaDiv>
       </ImlDiv>
       </>
    )
}

export default AProfile;
////////////////////////////////////////////////////////////

const ImlDiv = styled.div `
position: relative;
top: 15rem;
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;
object-fit: cover;
align-content: space-between;
`
const ProfilTitle = styled.h2 `
    content: attr(data-en);
    font-family: luxus-brut, cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    letter-spacing: .3rem;
    margin: 0;
    position: relative;
    top: 14.5rem;
    padding: 1px 45px;
`
////////////////////////////////////////////////
const ProfilDiv = styled.div `
position: relative;
width: 35rem;
height: 24rem;
margin-bottom: 1.5rem;
 overflow: hidden;
`

const ImgBxaIm = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    `
const ImgBxImgIm = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .7rem;
`

const ProfilImg = styled.img `
position: absolute;
    object-fit: cover;
    display: flex;
    top: 3%;
    left: 40%;
    background-size: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin: .5rem auto;
    z-index: 10;
    

`
const ProText = styled.div `
   position: absolute;
   left: .8rem;
   bottom: 0;
   width: 90%;
   height: 55%;
   padding: 10px;
   box-sizing: border-box;
   backdrop-filter: blur(5px);
   box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
   border-radius: .7rem;
   margin: 0 1rem 1rem 1rem ;
`

const MyName = styled.h4 `

color: white;
text-align: center;
font-weight: inherit;
font-family: fantasy;
font-size: 1.2rem;
margin: 0;
letter-spacing: .1rem;
 z-index: 20;
 
`
const MyBday = styled.h5 `
color: white;
text-align: center;
font-weight: inherit;
font-family: fantasy;
margin: 0;
 z-index: 20;
`
const MyPro = styled.p `

color: white;
font-size: 1.4rem;
text-align: center;
font-family: serif;
 z-index: 20;
 margin: 0;
`
///////////////////////////////////////////////////////
const HistoryDiv = styled.div `
position: relative;
width: 35rem;
height: 24rem;
margin-bottom: 1.5rem;
 overflow: hidden;
background-color: antiquewhite;
border-radius: .7rem;
`
const ProBlur = styled.div `
position: absolute;
width: 100%;
height: 100%;
backdrop-filter: blur(10px);
left: 0;
bottom: 0;
`
const HistoryImg = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .7rem;
    
`


///////////////////////////////////////////////////////////
const YouTubeDiv = styled.div `
position: relative;
width: 35rem;
height: 24rem;
margin-bottom: 1.5rem;
 overflow: hidden;
`
const ImgBxY = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: circle(400px at center 100px);
    transition: 0.5s;
     ${YouTubeDiv}:hover & {
     clip-path: circle(80px at center 100px);
     }
`

const ImgBxImgY = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .7rem;
    &:hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    }
`
const YoutubeTitle = styled.h2 `
    content: attr(data-en);
	position: absolute;
	transform: rotate(-5deg);
	top: 8%;
    left: 40%;
	color: #000000;
	font-size: 2.5rem;
	font-weight: 600;
	font-family: luxus-brut, cursive;
	font-style: italic;
    transition: 1s;
    ${YouTubeDiv}:hover & {
    opacity: 0;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`

const ContentY = styled.div `
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 55%;
   padding: 20px;
   box-sizing: border-box;
   text-align: center;
`
const ContentH2Y = styled.h2 `
    margin: 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${YouTubeDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`
const ContentAY = styled.a `
    text-decoration: none;
    background: #000;
    color: #fff;
    padding: 5px;
    display: inline-block;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);

    &:hover {
        transition: .3s;
        background: #e6e6e6;
        color: #000;
        border-radius: 5px;
    }
    
    ${YouTubeDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.2s;
    }
`
const ContentPY = styled.p `
    margin: 1rem 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${YouTubeDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    }
`
const IconY = styled.div `
position: absolute;
left: 41%;
width: 5rem;
height: 5rem;
transition: .2s;
transform: translateY(20px);
text-align: center;
margin-top: 3.2rem;
opacity: 0;
${YouTubeDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    transition: 2s;
    }
    
`
////////////////////////////////////////////////////////////
const TwitterDiv = styled.div `
position: relative;
width: 35rem;
height: 24rem;
margin-bottom: 1.5rem;
 overflow: hidden;

`
const ImgBxT = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    clip-path: circle(400px at center 100px);
    transition: 0.5s;
     ${TwitterDiv}:hover & {
     clip-path: circle(80px at center 100px);
     }
`

const ImgBxImgT = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .7rem;
    &::hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`
const TwitterTitle = styled.h2 `
    content: attr(data-en);
	position: absolute;
	transform: rotate(-5deg);
	top: 6%;
    left: 40%;
	color: #ffffff;
	font-size: 2.5rem;
	font-weight: 600;
	font-family: luxus-brut, cursive;
	font-style: italic;
    transition: 1s;
    ${TwitterDiv}:hover & {
    opacity: 0;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`
const ContentT = styled.div `
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 55%;
   padding: 20px;
   box-sizing: border-box;
   text-align: center;
`
const ContentH2T = styled.h2 `
    margin: 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${TwitterDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`
const ContentAT = styled.a `
    text-decoration: none;
    background: #000;
    color: #fff;
    padding: 5px;
    display: inline-block;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);

    &:hover {
        transition: .3s;
        background: #e6e6e6;
        color: #000;
        border-radius: 5px;
    }
    

    ${TwitterDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.2s;
    }
`
const ContentPT = styled.p `
   margin: 1rem 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${TwitterDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    }
`
const IconT = styled.div `
position: absolute;
left: 41.5%;
width: 5rem;
height: 5rem;
transition: .2s;
transform: translateY(20px);
text-align: center;
margin-top: 3.4rem;
opacity: 0;
${TwitterDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    transition: 2s;
    }
    
`
////////////////////////////////////////////////////////////

const InstgramDiv = styled.div `
position: relative;
width: 35rem;
height: 24rem;
margin-bottom: 1.5rem;
 overflow: hidden;
`
const ImgBxI = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    clip-path: circle(400px at center 100px);
    transition: 0.5s;
     ${InstgramDiv}:hover & {
     clip-path: circle(80px at center 100px);
     }
`
const InstgramTitle = styled.h2 `
    content: attr(data-en);
	position: absolute;
	transform: rotate(-5deg);
	top: 5%;
    left: 37%;
	color: #000000;
	font-size: 3rem;
	font-weight: 600;
	font-family: luxus-brut, cursive;
	font-style: italic;
    transition: 1s;
    ${InstgramDiv}:hover & {
    opacity: 0;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`

const ImgBxImgI = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .7rem;
    &::hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`
const ContentI = styled.div `
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 55%;
   padding: 20px;
   box-sizing: border-box;
   text-align: center;
`
const ContentH2I = styled.h2 `
    margin: 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${InstgramDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`
const ContentAI = styled.a `
    text-decoration: none;
    background: #000;
    color: #fff;
    padding: 5px;
    display: inline-block;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);

    &:hover {
        transition: .3s;
        background: #e6e6e6;
        color: #000;
        border-radius: 5px;
    }
    

    ${InstgramDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.3s;
    }
`
const ContentPI = styled.p `
    margin: 1rem 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${InstgramDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    }
`
const IconI = styled.div `
position: absolute;
left: 41%;
width: 5rem;
height: 5rem;
transition: .2s;
transform: translateY(20px);
text-align: center;
margin-top: 3.2rem;
opacity: 0;
${InstgramDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    transition: 2s;
    }
    
`

////////////////////////////////////////////////////////////

const QiitaDiv = styled.div `
position: relative;
width: 35rem;
height: 24rem;
margin-bottom: 1.5rem;
 overflow: hidden;
`
const ImgBxQ = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    clip-path: circle(400px at center 100px);
    transition: 0.5s;
     ${QiitaDiv}:hover & {
     clip-path: circle(80px at center 100px);
     }
`
const QittaTitle = styled.h2 `
    content: attr(data-en);
	position: absolute;
	transform: rotate(-5deg);
	top: 8%;
    left: 42%;
	color: #ffffff;
	font-size: 3rem;
	font-weight: 600;
	font-family: luxus-brut, cursive;
	font-style: italic;
    transition: 1s;
    ${QiitaDiv}:hover & {
    opacity: 0;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`


const ImgBxImgQ = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .7rem;
    &::hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`
const ContentQ = styled.div `
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 55%;
   padding: 20px;
   box-sizing: border-box;
   text-align: center;
`
const ContentH2Q = styled.h2 `
    margin: 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${QiitaDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.5s;
    }
`
const ContentAQ = styled.a `
    text-decoration: none;
    background: #000;
    color: #fff;
    padding: 5px;
    display: inline-block;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);

    &:hover {
        transition: .3s;
        background: #e6e6e6;
        color: #000;
        border-radius: 5px;
    }
    

    ${QiitaDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.3s;
    }
`
const ContentPQ = styled.p `
    margin: 1rem 0;
    padding: 0;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    ${QiitaDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    }
`
const IconQ = styled.div `
position: absolute;
left: 42.8%;
width: 5rem;
height: 5rem;
transition: .2s;
transform: translateY(20px);
text-align: center;
margin-top: 3.8rem;
opacity: 0;
${QiitaDiv}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
    transition: 2s;
    }
    
`
const QiitaImg = styled.img ` 
background-image: url('./img/qiitaIcon.jpg');
background-position: center;
background-repeat: no-repeat;
 background-size: cover;
background-size: 5.5rem;
width: 5rem;
height: 5rem;
`
////////////////////////////////////////////////////////////


