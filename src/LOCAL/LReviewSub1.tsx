import React from "react";
import styled, { css } from "styled-components";
// import {createContext, useState} from 'react'
import { Review1Context } from "../context/Review1Context";
import { useContext } from "react";

type ToggleProps = {
  Reviews?: boolean;
};

const LReviewSub1: React.FC = () => {
  const [Reviews, setReviews] = useContext(Review1Context);

  return (
    <ReviewDiv>
      <ReviewDivImg1
        Reviews={Reviews ? true : false}
        onClick={() => setReviews(!Reviews)}
      >
        <ReviewImg1 Reviews={Reviews ? true : false} src={"./img/0003.png"} />
        <ReviewH21 Reviews={Reviews ? true : false}>ONARI AREA</ReviewH21>
        <ReviewTextDiv1 Reviews={Reviews ? true : false}>
          <ReviewH31>
            <R1A href="http://chocolatebank.jp/">CHOCOLATE BANK</R1A>
          </ReviewH31>
          <ReviewP1>
            派手なゴリラが出迎えてくれる元銀行だった場所に <br />
            作られたチョコ専門店。店の奥には元々あった金庫が <br />
            部屋として使われている。 <br />
          </ReviewP1>
        </ReviewTextDiv1>
      </ReviewDivImg1>
    </ReviewDiv>
  );
};

export default LReviewSub1;


const ReviewDiv = styled.div`
  position: relative;
  top: -7rem;
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
 
`;

const ReviewDivImg1 = styled.div<ToggleProps>`
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

const ReviewImg1 = styled.img<ToggleProps>`
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

const ReviewH21 = styled.h2<ToggleProps>`
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

const ReviewTextDiv1 = styled.div<ToggleProps>`
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

const ReviewH31 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

const ReviewP1 = styled.p`
  font-family: scriptorama-markdown-jf, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2px;
  color: #fff;
`;

const R1A = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: pink;
  }
`;