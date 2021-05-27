import React from 'react'
import styled from 'styled-components'
// import {createContext, useState} from 'react'
import LReviewSub1 from "./LReviewSub1";
import LReviewSub2 from "./LReviewSub2";
import LReviewSub3 from "./LReviewSub3";
import LReviewSub4 from "./LReviewSub4";
import { sp } from "../media";




const LReview:React.FC = () => {

    return (
      <SectionReview>
          <LReviewSub1 />
          <LReviewSub2 />
          <LReviewSub3 />
          <LReviewSub4 />
      </SectionReview>
    );
}

export default LReview;


const SectionReview = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dae0d1;
  padding-top: 3rem;
  flex-wrap: wrap;
  ${sp`
display: none;
 `}
`;
