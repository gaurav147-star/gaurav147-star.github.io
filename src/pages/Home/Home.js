import React from "react";
import "./Home.scss";
import Model from "../../assets/logo3.png";
// import Typewriter from 'typewriter-effect';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import Typewriter from "../../components/Try";

const Home = () => {
  return (
    <div className="home">
      <div className="home__con">
        <div className="logo">
          <img src={Model} alt="" className="animate-bounce " />
        </div>
        <div>
          <h1>Hello, </h1>
          <h1>
            I&#8217;m <b style={{ color: "#ec5707" }}> Gaurav Gupta</b>{" "}
          </h1>
          <h3 style={{ display: "flex", color: "rgba(220, 220, 220, 0.824)" }}>
            <ArrowRightIcon fontSize="large" style={{ margin: "2px 0px" }} />
            <Typewriter />
          </h3>
          <div className="social-icons">
            <a
              href="https://github.com/gaurav147-star"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg gt"></i>
            </a>
            <a
              href="https://twitter.com/GauGupta147"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-lg tw"></i>
            </a>
            <a
              href="https://www.instagram.com/gaurav07gupta/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-lg insta"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-gupta-b913aa202/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-lg lin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
