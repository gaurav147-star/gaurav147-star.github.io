import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact'>
      <div className="cont" style={{}}>
        <p>Contact Me</p>
      </div>

      <div className="phni">
        <div className="social-icon">
          <a href="/"><i className="fas fa-phone"></i></a>
        </div>
        <div className="phn">
          <p>+91 9993009441</p>
        </div>
      </div>
      <div className="maili">
        <div className="social-icon">
          <a href="/"><i className="fas fa-envelope"></i></a>
        </div>
        <div className="mail">
          <p>gauravgupta9158@gmail.com</p>
        </div>
      </div>

      <div className="socialicons">
        <a href="https://github.com/gaurav147-star" target="_blank" rel="noreferrer"><i className="fab fa-github fa-lg"></i></a>
        <a href="https://twitter.com/GauGupta147" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-lg"></i></a>
        <a href="https://www.instagram.com/gaurav07gupta/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-lg"></i></a>
        <a href="https://www.linkedin.com/in/gaurav-gupta-b913aa202/" target="_blank" rel="noreferrer"><i
          className="fab fa-linkedin fa-lg"></i></a>
      </div>
      <p className='cpyright'>Copyright © 2022 Gaurav Gupta. All rights reserved</p>
    </div >
  )
}

export default Contact