import React from 'react'
import styled, {css} from 'styled-components'
// import {createContext, useState} from 'react'
import {ReviewContext} from '../context/ReviewCotext'
import {useContext} from 'react'



type ToggleProps = {
    Reviews?: boolean
}

const LReview:React.FC = () => {

    const [Reviews, setReviews] = useContext(ReviewContext);
   
    return (
       
        <SectionReview>
            
            <ReviewDiv>
                <ReviewDivImg
                Reviews={Reviews ? true : false}
                onClick={() => setReviews(!Reviews)}>
                    <ReviewImg Reviews={Reviews ? true : false} src={'./img/img111.jpg'} />
                    <ReviewH2 Reviews={Reviews ? true : false}>Text Review</ReviewH2>
                    <ReviewTextDiv Reviews={Reviews ? true : false}>
                        <ReviewH3>Img Review</ReviewH3>
                        <ReviewP>
                             I have been watching your video tutorial <br />
                             2 years and I also have my own YouTube <br />
                             , on which I teach ReactJs and NodeJa <br />
                        </ReviewP>
                    </ReviewTextDiv>
                </ReviewDivImg>
            </ReviewDiv>


            <ReviewDiv>
                <ReviewDivImg
                Reviews={Reviews ? true : false}
                onClick={() => setReviews(!Reviews)}>
                    <ReviewImg Reviews={Reviews ? true : false} src={'./img/img111.jpg'} />
                    <ReviewH2 Reviews={Reviews ? true : false}>Text Review</ReviewH2>
                    <ReviewTextDiv Reviews={Reviews ? true : false}>
                        <ReviewH3>Img Review</ReviewH3>
                        <ReviewP>
                             I have been watching your video tutorial <br />
                             2 years and I also have my own YouTube <br />
                             , on which I teach ReactJs and NodeJa <br />
                        </ReviewP>
                    </ReviewTextDiv>
                </ReviewDivImg>
            </ReviewDiv>


            <ReviewDiv>
                <ReviewDivImg
                Reviews={Reviews ? true : false}
                onClick={() => setReviews(!Reviews)}>
                    <ReviewImg Reviews={Reviews ? true : false} src={'./img/img111.jpg'} />
                    <ReviewH2 Reviews={Reviews ? true : false}>Text Review</ReviewH2>
                    <ReviewTextDiv Reviews={Reviews ? true : false}>
                        <ReviewH3>Img Review</ReviewH3>
                        <ReviewP>
                             I have been watching your video tutorial <br />
                             2 years and I also have my own YouTube <br />
                             , on which I teach ReactJs and NodeJa <br />
                        </ReviewP>
                    </ReviewTextDiv>
                </ReviewDivImg>
            </ReviewDiv>


            <ReviewDiv>
                <ReviewDivImg
                Reviews={Reviews ? true : false}
                onClick={() => setReviews(!Reviews)}>
                    <ReviewImg Reviews={Reviews ? true : false} src={'./img/img111.jpg'} />
                    <ReviewH2 Reviews={Reviews ? true : false}>Text Review</ReviewH2>
                    <ReviewTextDiv Reviews={Reviews ? true : false}>
                        <ReviewH3>Img Review</ReviewH3>
                        <ReviewP>
                             I have been watching your video tutorial <br />
                             2 years and I also have my own YouTube <br />
                             , on which I teach ReactJs and NodeJa <br />
                        </ReviewP>
                    </ReviewTextDiv>
                </ReviewDivImg>
            </ReviewDiv>


            <ReviewDiv>
                <ReviewDivImg
                Reviews={Reviews ? true : false}
                onClick={() => setReviews(!Reviews)}>
                    <ReviewImg Reviews={Reviews ? true : false} src={'./img/img111.jpg'} />
                    <ReviewH2 Reviews={Reviews ? true : false}>Text Review</ReviewH2>
                    <ReviewTextDiv Reviews={Reviews ? true : false}>
                        <ReviewH3>Img Review</ReviewH3>
                        <ReviewP>
                             I have been watching your video tutorial <br />
                             2 years and I also have my own YouTube <br />
                             , on which I teach ReactJs and NodeJa <br />
                        </ReviewP>
                    </ReviewTextDiv>
                </ReviewDivImg>
            </ReviewDiv>



        </SectionReview>

    )
}

export default LReview;


const SectionReview = styled.section `
margin: 0;
padding: 0;
box-sizing: border-box;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
min-height: 100vh;
background-color: #ecba7d;
`


const ReviewDiv = styled.div`
position: relative;
width: 200px;
height: 200px;
margin: 10px;
overflow: hidden;
cursor: pointer;
`

const ReviewDivImg = styled.div<ToggleProps>`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(231, 134, 134 .8);

 ${({Reviews}) => Reviews ? css `
        position: fixed;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        z-index: 100;
    ` : ''}
`

const ReviewImg = styled.img<ToggleProps>`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;

 ${({Reviews}) => Reviews ? css `
        position: absolute;
        top: 60px;
        left: 50px;
        right: 50px;
        bottom: 50px;
        width: calc(100% - 100px);
        height: calc(100% - 100px);
    ` : ''}
`

const ReviewH2 = styled.h2<ToggleProps>`
opacity: 0;
visibility: hidden;
transform: translateY(100%);
${({Reviews}) => Reviews ? css `
        opacity: 1;
        visibility: visible;
        text-align: center;
        color: #fff;
        font-size: 2rem;
        font-weight: 300;
        margin-top: 15px;
        letter-spacing: 4px;
        transform: translateY(0);
        transition: .8s;
    ` : ''}  
`

const ReviewTextDiv = styled.div<ToggleProps>`
position: absolute;
bottom: 50px;
right: 50px;
left: 50px;
opacity: 1;
visibility: hidden;
background: rgba(0, 0, 0, .8);
padding: 20px;
transform: translateY(100%);

${({Reviews}) => Reviews ? css `
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        transition: .5s;
        z-index: 1000;
    ` : ''}

`

const ReviewH3 = styled.h3 `
font-size: 24px;
font-weight: 600;
color: #fff;
`

const ReviewP = styled.p `

`