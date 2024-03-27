import React from "react";
import { styled } from "styled-components";
import Card from "./Card";
import {
  BiLogoNodejs,
  BiLogoReact,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoJavascript,
} from "react-icons/bi";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import {
  SiThealgorithms,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { Slide, Zoom } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skills">
      <Slide direction="down" triggerOnce="true">
        <h4>
          My <span>Skills</span>
        </h4>
        <h1>What I can Do</h1>
      </Slide>
      <Cards>
        <Zoom triggerOnce="true">
          <Card
            Icon={BiLogoReact}
            title={"React.Js"}
            howr={"90"}
            colr="61dbfb"
          />
          <Card
            Icon={BiLogoJavascript}
            title={"JavaScript"}
            howr={"80"}
            colr="FEF171"
          />

          <Card Icon={SiMysql} title={"MySQL"} howr={"70"} colr="01be96" />
          <Card
            Icon={SiTypescript}
            title={"TypeScript"}
            howr={"50"}
            colr="1556e1"
          />

          <Card
            Icon={BiLogoPython}
            title={"Python"}
            howr={"50"}
            colr="FEF171"
          />
          <Card
            Icon={BiLogoCPlusPlus}
            title={"C++"}
            howr={"90"}
            colr="9daad5"
          />

          <Card Icon={BiLogoCss3} title={"CSS"} howr={"70"} colr="1556e1" />
          <Card
            Icon={BiLogoNodejs}
            title={"Node.Js"}
            howr={"60"}
            colr="01be96"
          />

          <Card
            Icon={AiOutlineHtml5}
            title={"HTML"}
            howr={"90"}
            colr="8079ec"
          />
          <Card Icon={AiFillGithub} title={"GitHub"} howr={"90"} colr="#000" />

          <Card
            Icon={FaBootstrap}
            title={"Bootstrap"}
            howr={"90"}
            colr="1556e1"
          />
          <Card
            Icon={SiTailwindcss}
            title={"Tailwind CSS"}
            howr={"90"}
            colr="1556e1"
          />
          <Card
            Icon={SiThealgorithms}
            title={"Data Structure & Algo."}
            howr={"80"}
            colr="45433c"
          />
        </Zoom>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 1rem auto;
  padding: 3rem auto;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
  span {
    font-weight: lighter;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 0.8rem;
`;
