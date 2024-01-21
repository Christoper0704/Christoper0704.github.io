import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import '../Styles/Navbar.css'
import menuBar from '../Images/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const openMenu = () =>
  {
    setShowMenu(!showMenu);
  }
  
  const closeMenu = () => setShowMenu(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200)
    {
      setScroll(true);
    }
    else
    {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  let x = ['navbar'];
  if(scroll){
    x.push('scroll');
  }

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
      // <nav className={x.join(" ")}>
      //   <div className='navbar-container'>
      //     <div className='navbar-logo'>
      //       <h3>PERSONAL WEBSITE</h3>
      //     </div>
      //     <div className='menu-icon' onClick={openMenu}>
      //       <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
      //     </div>
      //       <ul className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
      //         <li>
      //           <a href="#about" className='navbar-link' onClick={closeMenu}>About Me</a>
      //         </li>
      //         <li>
      //           <a href="#skill" className='navbar-link' onClick={closeMenu}>Skill</a>
      //         </li>
      //         <li>
      //           <a href="#project" className='navbar-link' onClick={closeMenu}>Project</a>
      //         </li>
      //         <li>
      //           <a href="#contact" className='navbar-link' onClick={closeMenu}>Contact Me</a>
      //         </li>
      //       </ul>
      //   </div>
      // </nav>
  )
}

export default Navbar