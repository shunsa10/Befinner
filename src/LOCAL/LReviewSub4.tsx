import React from "react";
import styled, { css } from "styled-components";
// import {createContext, useState} from 'react'
import { ReviewContext } from "../context/ReviewCotext";
import { useContext } from "react";

type ToggleProps = {
  Reviews?: boolean;
};

const LReviewSub4: React.FC = () => {
  const [Reviews, setReviews] = useContext(ReviewContext);

  return (
    <ReviewDiv>
      <ReviewDivImg
        Reviews={Reviews ? true : false}
        onClick={() => setReviews(!Reviews)}
      >
        <ReviewImg Reviews={Reviews ? true : false} src={"./img/0004.jpeg"} />
        <ReviewH2 Reviews={Reviews ? true : false}>ZAIMOKUZA AREA</ReviewH2>
        <ReviewTextDiv Reviews={Reviews ? true : false}>
          <ReviewH3>
            <R4A href="http://www.sld-inc.com/umizoi-kicorishokudou/">
              キコリ食堂
            </R4A>
          </ReviewH3>
          <ReviewP>
            最高のロケーションで食事できる食堂はいつも <br />
            お客さんでいっぱい。三崎マグロのカツは <br />
            レアな状態で提供される一番人気です <br />
          </ReviewP>
        </ReviewTextDiv>
      </ReviewDivImg>
    </ReviewDiv>
  );
};

export default LReviewSub4;

const ReviewDiv = styled.div`
  position: relative;
  top: -7rem;
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
`;

const ReviewDivImg = styled.div<ToggleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(231, 134, 134 0.8);

  ${({ Reviews }) =>
    Reviews
      ? css`
          position: fixed;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          z-index: 100;
        `
      : ""}
`;

const ReviewImg = styled.img<ToggleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
  &:hover {
    filter: blur(3px);
  }

  ${({ Reviews }) =>
    Reviews
      ? css`
          position: absolute;
          top: 60px;
          left: 50px;
          right: 50px;
          bottom: 50px;
          width: calc(100% - 100px);
          height: calc(100% - 100px);
        `
      : ""}
`;

const ReviewH2 = styled.h2<ToggleProps>`
  opacity: 0;
  visibility: hidden;
  transform: translateY(100%);
  ${({ Reviews }) =>
    Reviews
      ? css`
          opacity: 1;
          visibility: visible;
          text-align: center;
          color: #000000;
          font-size: 2rem;
          font-weight: 300;
          margin-top: 15px;
          letter-spacing: 4px;
          transform: translateY(0);
          transition: 0.8s;
        `
      : ""}
`;

const ReviewTextDiv = styled.div<ToggleProps>`
  position: absolute;
  bottom: 40px;
  right: 50px;
  left: 50px;
  opacity: 1;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  transform: translateY(100%);

  ${({ Reviews }) =>
    Reviews
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: 0.5s;
          z-index: 1000;
        `
      : ""}
`;

const ReviewH3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

const ReviewP = styled.p`
  color: #fff;
`;


const R4A = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #dcff7b;
  }
`;
