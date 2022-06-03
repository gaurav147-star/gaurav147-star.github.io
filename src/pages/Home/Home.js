import React from 'react'
import './Home.css';
import model from '../../assets/model.svg'
const Home = () => {
 
  return (
    <div className="home">
      <div className="home__con">
        <p>Hello,</p>
        <p>I&#8217;M Gaurav Gupta</p>
        <p>A student of IIIT Bhopal</p>
        <h5><i className="fas fa-angle-right"></i> <span className="typed"
          data-typed-items="Chai lover, Front End Developer, Back End Developer, Competitive Coder, Tech Enthusiast, C++ Programmer"></span>
        </h5>
      </div>
      <div className="home__model">
        <img src={model} alt="model" />
      </div>
    </div>
  )
}

export default Home