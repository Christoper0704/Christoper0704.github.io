import React, { useEffect, useState } from 'react'
import navSticky from './navSticky';
import '../Styles/Navbar.css'

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
      <nav className={x.join(" ")}>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <h3>PERSONAL WEBSITE</h3>
          </div>
          <div className='menu-icon' onClick={openMenu}>
            <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
              <li>
                <a href="#about" className='navbar-link' onClick={closeMenu}>About Me</a>
              </li>
              <li>
                <a href="#skill" className='navbar-link' onClick={closeMenu}>Skill</a>
              </li>
              <li>
                <a href="#project" className='navbar-link' onClick={closeMenu}>Project</a>
              </li>
              <li>
                <a href="#contact" className='navbar-link' onClick={closeMenu}>Contact Me</a>
              </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar