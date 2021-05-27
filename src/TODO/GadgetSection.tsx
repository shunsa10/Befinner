import React from "react";
import styled from 'styled-components'
import { sp } from '../media';

const GadgetSection:React.FC = () => {

    return (
      <GadgetWrap>
        <GadgetConteiner>
          <Gadgetbox>
            <GadgetImg0></GadgetImg0>
            <GadgetContent>
              <GadgetTextBox>
                <GadgetH2>Wetsuits</GadgetH2>
                <GadgetP>
                  海に長くいれば体温が下がり、体力も減ります。 <br />
                  気温や水温が下がり出してからは、ウェットスーツで
                  <br />
                  寒さ対策が必須になります。
                  <br />
                </GadgetP>
                <Content href="https://hako-blog.com/2020/05/02/wettosu-tu33sha/">
                  Read More
                </Content>
              </GadgetTextBox>
            </GadgetContent>
          </Gadgetbox>
        </GadgetConteiner>
        <GadgetConteiner>
          <Gadgetbox>
            <GadgetImg1></GadgetImg1>
            <GadgetContent>
              <GadgetTextBox>
                <GadgetH2>Leash code</GadgetH2>
                <GadgetP>
                  サーフボードと体をつなぐ「命綱」です。 <br />
                  サーフボードが流されてしまって、沖に取り残されたり <br />
                  流れたボードが人に当たらないようにしたり重要な役割があります。
                  <br />
                </GadgetP>
                <Content href="https://hako-blog.com/2020/09/11/leash/">
                  Read More
                </Content>
              </GadgetTextBox>
            </GadgetContent>
          </Gadgetbox>
        </GadgetConteiner>
        <GadgetConteiner>
          <Gadgetbox>
            <GadgetImg2></GadgetImg2>
            <GadgetContent>
              <GadgetTextBox>
                <GadgetH2>wax</GadgetH2>
                <GadgetP>
                  滑らないように、ボードに塗りこむ滑り止めです。
                  <br />
                  時期によって替える必要があるのですが、ここでは <br />
                  ベーシックなものを紹介します。 <br />
                </GadgetP>
                <Content href="https://www.amazon.co.jp/dp/B07C8136V6?tag=maftracking241628-22&linkCode=ure&creative=6339">
                  Read More
                </Content>
              </GadgetTextBox>
            </GadgetContent>
          </Gadgetbox>
        </GadgetConteiner>
        <GadgetConteiner>
          <Gadgetbox>
            <GadgetImg3></GadgetImg3>
            <GadgetContent>
              <GadgetTextBox>
                <GadgetH2>soft case</GadgetH2>
                <GadgetP>
                  サーフボートを保管する布製のカバーです。 <br />
                  サーフボードは、衝撃と紫外線に弱く <br />
                  そのまま放り出しておくと早く劣化します。
                  <br />
                </GadgetP>
                <Content href="https://hako-blog.com/2019/08/11/surfbord-hokanhouhou/">
                  Read More
                </Content>
              </GadgetTextBox>
            </GadgetContent>
          </Gadgetbox>
        </GadgetConteiner>
      </GadgetWrap>
    );
};

export default GadgetSection;

const GadgetWrap = styled.div`
  position: relative;
  top: -20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${sp`
  flex-wrap: wrap;
  top: -53rem;
  min-height: 38rem;
`}
`;

const GadgetConteiner = styled.div`
  position: relative;
  margin: 0 15px;
  display: flex;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 500px;
  ${sp`
  flex-wrap: wrap;
 margin: 0 5px;
`}
`;
const Gadgetbox = styled.div`
  position: relative;
  width: 275px;
  height: 300px;
  background: #000;
  transition: 0.5s;
  transform-style: preserve-3d;
  ${sp`
width: 150px;
  height: 190px;
`}
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
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
  }
`;
  
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
const GadgetContent = styled.div`
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
  ${sp`
padding: 10px;
`}
`;
const GadgetTextBox = styled.div `
`
const GadgetH2 = styled.h2`
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(200px);
  opacity: 0;
  ${sp`
font-size: .2rem;
`}
  ${Gadgetbox}:hover & {
    transform: translateY(0px);
    transition-delay: 0.6s;
    opacity: 1;
  }
`;
const GadgetP = styled.p`
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  transform: translateY(200px);
  opacity: 0;
  ${sp`
font-size: .1rem;
`}
  ${Gadgetbox}:hover & {
    transform: translateY(0px);
    transition-delay: 0.8s;
    opacity: 1;
  }
`;

const Content = styled.a`
  text-decoration: none;
  background: #fff;
  color: #000;
  padding: 5px;
  display: inline-block;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;
  transform: translateY(50px);
  ${sp`
font-size: 3px;
`}
  ${Gadgetbox}:hover & {
    transform: translateY(0px);
    transition-delay: 1s;
    opacity: 1;
  }

  &:hover {
    transition: 0.2s;
    transition-delay: 0.2s;
    background: #d2f8eb;
    color: #000;
    border-radius: 10px;
  }
`;