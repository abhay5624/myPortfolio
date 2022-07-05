import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
        <Link to="/about">
          <FontAwesomeIcon icon={faInfoCircle} />
          <h4>About</h4>
        </Link>
      </div>
      <div>
        <Link to="/skills">
          <FontAwesomeIcon icon={faHammer} />
          <h4>Skills</h4>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <FontAwesomeIcon icon={faComment} />
          <h4>Contact</h4>
        </Link>
      </div>
      <div>
        <Link to="hobbies">
          <FontAwesomeIcon icon={faFutbol} />
          <h4>Hobbies</h4>
        </Link>
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
  a {
    color: white;
    text-decoration: none;
  }
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
