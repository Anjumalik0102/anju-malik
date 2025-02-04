import '../styles/header.css'
import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom'
const Header=()=>{
 
  const navigate = useNavigate();

  const handleNavigation = (section) => {
      
      if(section==="home"){
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // This makes the scroll smooth
        });
        navigate(`/`);
      }
      else{
        navigate(`/${section}`);
      }
  };
  return(
    <>
      <nav className='navbar'>
        <div className='innerDiv'>
            <div className='logo'><div className="logoDiv">
                <img  src="/images/logo_my.jpg" alt="Profile" />
                </div>
                </div>
            <div className='menuDiv'>
        <ul className='menuList'>
        <li onClick={() => handleNavigation("home")} className='list'>Home</li>
        <li onClick={() => handleNavigation("skill")} className='list'>Skill</li>
        <li onClick={() => handleNavigation("work")} className='list'>Work</li>
        <li onClick={() => handleNavigation("about")} className='list'>About</li>
        </ul>
        
        </div>
        <div className='btnDiv'>
          <button onClick={() => handleNavigation("contact")} className='btn'>Contact Me
          </button></div>
        </div>
      </nav> 
       
    </>
  )
}
export default Header;