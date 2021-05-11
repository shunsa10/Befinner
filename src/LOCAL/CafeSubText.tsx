import React, { useRef, useEffect } from 'react';
import styled, {css} from 'styled-components'


const CafeSubText:React.FC = () => {
    return (
       <ContentDiv>
           <SubDiv>
            <SudTextH2>People will travel anywhere for good food.</SudTextH2>
           </SubDiv>
       </ContentDiv>
    )
}
//レネ　ノーマシェフ

export default CafeSubText;


const ContentDiv = styled.div `
    width: 100%;
    display: flex;
    margin-top:22rem;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  
`

const SubDiv = styled.div `
    margin: 0 auto;

`

const  SudTextH2 = styled.h2 `
content: attr(data-en);
font-family: luxus-brut, cursive;
font-style: normal;
font-weight: 600;
font-size: 2.4rem;
letter-spacing: 2px;
`