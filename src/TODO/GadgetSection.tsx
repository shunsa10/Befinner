import React from 'react'
import styled from 'styled-components'
// import { pc, sp, tab } from '../media';


const GadgetSection:React.FC = () => {
    return (
        <GadgetWrap>
            <GadgetConteiner>
                <Gadgetbox>
                  <GadgetImg0></GadgetImg0>
                    <GadgetContent>
                        <GadgetTextBox>
                            <GadgetH2>Gadget</GadgetH2>
                            <GadgetP>
                                I have been watching your video tutorial <br />
                               2 years and I also have my own YouTube <br />
                               , on which I teach ReactJs and NodeJa <br />
                            </GadgetP>
                        </GadgetTextBox>
                    </GadgetContent>
                </Gadgetbox>
            </GadgetConteiner>
            <GadgetConteiner>
                <Gadgetbox>
                  <GadgetImg1></GadgetImg1>
                    <GadgetContent>
                        <GadgetTextBox>
                            <GadgetH2>Gadget</GadgetH2>
                            <GadgetP>
                                I have been watching your video tutorial <br />
                               2 years and I also have my own YouTube <br />
                               , on which I teach ReactJs and NodeJa <br />
                            </GadgetP>
                        </GadgetTextBox>
                    </GadgetContent>
                </Gadgetbox>
            </GadgetConteiner>
            <GadgetConteiner>
                <Gadgetbox>
                  <GadgetImg2></GadgetImg2>
                    <GadgetContent>
                        <GadgetTextBox>
                            <GadgetH2>Gadget</GadgetH2>
                            <GadgetP>
                                I have been watching your video tutorial <br />
                               2 years and I also have my own YouTube <br />
                               , on which I teach ReactJs and NodeJa <br />
                            </GadgetP>
                        </GadgetTextBox>
                    </GadgetContent>
                </Gadgetbox>
            </GadgetConteiner>
            <GadgetConteiner>
                <Gadgetbox>
                    {/* <Ig> */}
                  <GadgetImg3></GadgetImg3>
                    {/* </Ig> */}
                    <GadgetContent>
                        <GadgetTextBox>
                            <GadgetH2>Gadget</GadgetH2>
                            <GadgetP>
                                I have been watching your video tutorial <br />
                               2 years and I also have my own YouTube <br />
                               , on which I teach ReactJs and NodeJa <br />
                            </GadgetP>
                        </GadgetTextBox>
                    </GadgetContent>
                </Gadgetbox>
            </GadgetConteiner>
        </GadgetWrap>
    );
};

export default GadgetSection;

const GadgetWrap = styled.div `
position: relative;
top: -25rem;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;

`

const GadgetConteiner = styled.div `
position: relative;
margin: 0 15px;
display: flex;
flex-wrap: wrap;
transform-style: preserve-3d;
perspective: 500px;

`
const Gadgetbox = styled.div `
position: relative;
width: 275px;
height: 300px;
background: #000;
transition: .5s;
transform-style: preserve-3d;
${GadgetWrap}:hover & {
     transform: rotateY(25deg);
 }
${GadgetConteiner}:hover ~ ${GadgetConteiner} & {
     transform: rotateY(-25deg);
 }
${GadgetConteiner}:hover & {
     transform: rotateY(0deg);
     transform: scale(1.25);
     z-index: 1;
     box-shadow: 0 25px 40px rgba(0, 0, 0, .5);
 }
`
const Ig = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 1;
    background: linear-gradient(180deg,#00aeff,#000);

    &::before::hover {
        opacity: 0;
    }
}
`
const GadgetImg0 = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url('./img/img80.jpg');
background-position: center;
background-size: cover;
`
const GadgetImg1 = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url('./img/img81.jpg');
background-position: center;
background-size: cover;
`
const GadgetImg2 = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url('./img/img82.jpg');
background-position: center;
background-size: cover;
`
const GadgetImg3 = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url('./img/img84.jpg');
background-position: center;
background-size: cover;
`
const GadgetContent = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
display: flex;
padding: 20px;
align-items: flex-end;
box-sizing: border-box;
`
const GadgetTextBox = styled.div `
`
const GadgetH2 = styled.h2 `
color: #fff;
transition: .5s;
text-transform: uppercase;
margin-bottom: 5px;
font-size: 20px;
transform: translateY(200px);
opacity: 0;
${Gadgetbox}:hover & {
    transform: translateY(0px);
    transition-delay: .6s;
    opacity: 1;
}
`
const GadgetP = styled.p `
color: #fff;
transition: .5s;
font-size: 14px;
transform: translateY(200px);
opacity: 0;
${Gadgetbox}:hover & {
    transform: translateY(0px);
     transition-delay: .8s;
     opacity: 1;
}
`