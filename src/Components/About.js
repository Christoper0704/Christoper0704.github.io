import React from 'react';
import '../Styles/About.css';
import selfie from '../Images/foto.png';

const About = () => {
  return (
    <section id='about'>
      <div className='about-content'>
        <span className='about-intro'>I'm <span className='about-name'>Christoper Luis Alexander</span><br /> Application Developer</span>
        <p className='about-para'>App Developer interested such as Web and Android.</p>
      </div>
      <img className='about-image' src={selfie} alt='profile'/>
    </section>
    // <div id='about'>
    //   <div className='about-image'>
    //     <div className='about-text'>
    //       <div className>
    //         <img src={require('../Images/selfie.jpg')} className='figure' alt='myselfphoto'></img>
    //       </div>
    //       <h1 >I'm Christoper Luis Alexander</h1>
    //       <br></br>
    //       <h3>App Developer interested such as web and Android.</h3>
    //     </div>
    //   </div>
    // </div>
  )
}

export default About