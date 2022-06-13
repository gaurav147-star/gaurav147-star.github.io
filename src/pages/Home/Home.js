import React from 'react'
import './Home.css';
import Model from '../../assets/logo3.png'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Home = () => {

  return (
    <div className="home">
      <div className="home__con">
        <div className="logo">
          <img src={Model} alt="" />
        </div>
        <div>
          <h1>Hello, </h1>
          <h1>I&#8217;m <b style={{ color: "#ec5707" }}> Gaurav Gupta</b> </h1>
          <h3 style={{ display: "flex", color: "rgba(220, 220, 220, 0.824)" }}><ArrowRightIcon fontSize='large' style={{ margin: "3px 0px" }} />
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Front End Developer", "Back End Developer", "Competitive Coder", "Tech Enthusiast", "Linux User", "Chai lover"
                ]
              }}
            />
          </h3>
          <div className="social-icons">
            <a href="https://github.com/gaurav147-star" target="_blank" rel="noreferrer"><i className="fab fa-github fa-lg gt"></i></a>
            <a href="https://twitter.com/GauGupta147" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-lg tw"></i></a>
            <a href="https://www.instagram.com/gaurav07gupta/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-lg insta"></i></a>
            <a href="https://www.linkedin.com/in/gaurav-gupta-b913aa202/" target="_blank" rel="noreferrer"><i
              className="fab fa-linkedin fa-lg lin"></i></a>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home