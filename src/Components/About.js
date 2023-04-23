import React from 'react';
import '../Styles/About.css'

const About = () => {
  return (
    <div id='about'>
      <div className='about-image'>
        <div className='about-text'>
          <div className>
            <img src={require('../Images/selfie.jpg')} className='figure' alt='myselfphoto'></img>
          </div>
          <h1 >I'm Christoper Luis Alexander</h1>
          <br></br>
          <h3>App Developer interested such as web and Android.</h3>
        </div>
      </div>
    </div>
  )
}

export default About