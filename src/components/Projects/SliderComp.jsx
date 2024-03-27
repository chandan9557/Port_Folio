import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from "styled-components";

let data = [
  {
    img: "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693148371/certificate%20images/Screenshot_from_2023-08-27_20-28-32_wkiegs.png",
    disc: "Stay ahead of the forecast with our intuitive weather app. Get real-time updates on current weather conditions, hourly forecasts, and 7-day outlook, all beautifully presented for your convenience. Plan your day with confidence, rain or shine!",
    link: "https://main--chandutech.netlify.app/",
    title: "Weather App",
    img_title: "Weather",
  },
  {},
  {
    img: "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693158978/certificate%20images/websites/Screenshot_from_2023-08-27_23-24-16_xquryc.png",
    disc: "Effortlessly organize your tasks with our intuitive to-do list app. Stay on top of your daily agenda, prioritize tasks, and track your progress seamlessly. Whether it's work projects, personal errands, or long-term goals, our app helps you stay productive and focused.",
    link: "https://main--chandu01.netlify.app/",
    title: "Todo App",
    img_title: "Todo App",
  },
  {},
  {
    img: "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693159481/certificate%20images/websites/Screenshot_from_2023-08-27_23-32-17_gguq7q.png",
    disc: "A virtual piano is an application designed to simulate playing a piano on a computer. The virtual piano is played using a keyboard and/or mouse and typically comes with many features found on a digital piano.",
    link: "https://virtualpiano2023.netlify.app/",
    title: "Virtual Piano",
    img_title: "Virtual_Piano",
  },
  {},
];

const SliderComp = () => {
  const arrowRef = useRef(null);

  let sliderProject = "";
  sliderProject = data.map((item, i) => {
    return <Project item={item} key={i} />;
  });
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="forw">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;
const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.312);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
    border-radius: 5px;
    &:hover {
      background-color: #01be96;
      color: black;
    }
  }
  .back {
    left: -1rem;
  }
`;
