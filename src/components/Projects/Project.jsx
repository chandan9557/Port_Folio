import React from "react";
import { styled } from "styled-components";

const Project = (props) => {
  const { img, disc, title, link, img_title } = props.item;
  return (
    <Container className="project">
      <img src={img} alt={img_title} />
      <div className="disc">
        <h1>{title}</h1>
        <a href={link}>
          <p>{disc}</p>
        </a>
      </div>
    </Container>
  );
};

export default Project;
const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    a {
      h1 {
        font-size: 1rem;
        color: #fff;
      }

      text-decoration: none;
      p {
        width: 90%;
        font-size: 0.8rem;
        color: #ffffff;
        opacity: 0.8;
        background-color: #6d3636ab;
        padding: 0.2rem 1.5rem;
      }
    }

    transition: all 400ms ease-in-out;
  }
  &:hover > img {
    transform: scale(1.3);
  }

  &:hover > .disc {
    bottom: 0;
  }
`;
