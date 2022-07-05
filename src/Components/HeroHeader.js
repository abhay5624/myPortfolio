import React from "react";
import ThreeDimage from "./ThreeDimage";
import styled from "styled-components";
import Navbar from "./Navbar";
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ut at
            enim similique molestiae cupiditate nobis veniam expedita soluta
            obcaecati?
          </p>
        </DetailBox>
      </RelativeDiv>
      <Navbar />
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
