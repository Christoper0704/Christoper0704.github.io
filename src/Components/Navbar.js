import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import '../Styles/Navbar.css'
import menuBar from '../Images/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      {/* <img src={menuBar} className='navbar-logo' alt='logo' /> */}
      <div className='navMenu'>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='navMenuItem'>About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItem'>Skill</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-10} duration={500} className='navMenuItem'>Project</Link>
        {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItem'>Contact</Link> */}
      </div>

      <img src={menuBar} alt='Menu' className='mobileMenu' onClick={() => setShowMenu(!showMenu)}/>
      <div className='mobileNavMenu' style={{display: showMenu ? 'flex' : 'none'}}>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='navMobileMenuItem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='navMobileMenuItem' onClick={() => setShowMenu(false)}>Skill</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-10} duration={500} className='navMobileMenuItem' onClick={() => setShowMenu(false)}>Project</Link>
        {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItem'>Contact</Link> */}
      </div>
    </nav>
  )
}

export default Navbar