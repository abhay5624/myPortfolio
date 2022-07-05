import React from "react";
import ThreeDimage from "./ThreeDimage";
import styled from "styled-components";

const HeroHeader = () => {
  return (
    <>
      <RelativeDiv>
        <div className="threeobject">
          <ThreeDimage />
        </div>
        <DetailBox>
          <h2>Web Developer</h2>
          <p>
            Hello , Its Abhay your front-end Developer. I develop your business
            and personal web. Descover about my work and my work Here!!
          </p>
        </DetailBox>
      </RelativeDiv>
    </>
  );
};
const RelativeDiv = styled.div`
  position: relative;
`;
const DetailBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align: center;
  h2 {
    font-size: 8rem;
    text-transform: uppercase;
    color: white;
    margin-bottom: 0;
  }
  p {
    margin: 0;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    color: white;
  }
`;
export default HeroHeader;
