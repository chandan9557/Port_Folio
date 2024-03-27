import React from "react";
import { styled } from "styled-components";
import SliderComp from "./SliderComp";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="projects">
      <Zoom>
        <h1>
          Real-time Live <span className="green">Projects</span>
        </h1>
        <p>
          I've learned a lot from tackling different challenges in my projects -
          coding, solving problems, and working with teams. I'm eager to use
          these skills for exciting new projects that push innovation further.
        </p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }
  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
