import React, { useState } from "react";
import { styled } from "styled-components";
import { FaLaptopHouse } from "react-icons/fa";

const Header = () => {
  const [bar, setBar] = useState(false);

  const humBergerSet = () => {
    setBar(!bar);
  };

  const humBergerUnset = () => {
    setBar(bar === false);
  };
  return (
    <Container bar={bar}>
      <Logo>
        <span className="green">
          <FaLaptopHouse />
        </span>
        <h1>Portfolio</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home" onClick={humBergerUnset}>
            Home
          </a>
        </span>
        <span>
          <a href="#skills" onClick={humBergerUnset}>
            Skills
          </a>
        </span>
        <span>
          <a href="#projects" onClick={humBergerUnset}>
            Projects
          </a>
        </span>
        <span>
          <a href="#certificates" onClick={humBergerUnset}>
            Certificates
          </a>
        </span>
        <span>
          <a href="#footer" onClick={humBergerUnset}>
            Contact Me
          </a>
        </span>
      </Nav>
      <div onClick={humBergerSet} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  @media (max-width: 763px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        &:before,
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }
        &:before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 300ms ease-in-out;
        }
        &:after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 300ms ease-in-out;
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
  }
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: all 250ms ease-in-out;
    overflow: hidden;
    z-index: 99;
  }
  span {
    margin-left: 1rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 300ms ease-in-out;
      }
      &:hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
