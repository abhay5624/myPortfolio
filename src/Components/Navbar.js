import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faHome,
  faInfoCircle,
  faHammer,
  faComment,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Navigation>
      <div>
        <FontAwesomeIcon icon={faInfoCircle} />
        <h4>About</h4>
      </div>
      <div>
        <FontAwesomeIcon icon={faHammer} />
        <h4>Skills</h4>
      </div>
      <div>
        <FontAwesomeIcon icon={faComment} />
        <h4>Contact</h4>
      </div>
      <div>
        <FontAwesomeIcon icon={faFutbol} />
        <h4>Hobbies</h4>
      </div>
    </Navigation>
  );
};
const Navigation = styled.nav`
  padding: 10px;
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  color: white;
  text-align: center;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99;
  h4 {
    margin: 0;
    cursor: pointer;
    font-weight: 400;
  }
  div:hover {
    background: -moz-linear-gradient(45deg, #f3ec78, #af4261);
    background: -webkit-linear-gradient(45deg, #f3ec78, #af4261);
    background: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    svg {
      color: #f3ec78;
    }
  }
`;
export default Navbar;
