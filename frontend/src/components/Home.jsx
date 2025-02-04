import '../styles/home.css'
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Skill from "./Skill";
import Work from "./Work";
import Contact from './ContactMe';
import About from "./AboutMe";
import Footer from './Footer';
const Home = () => {
      const location = useLocation();
      useEffect(() => {
            const sectionId = location.pathname.split("/").pop(); // Get the last part of the URL
            if (sectionId) {
              const section = document.getElementById(sectionId);
              if (section) {
                const rect = section.getBoundingClientRect(); // Get position of the element
                const offset = 80; // Set the offset value
        
                // Scroll to the section with an offset of 20px
                window.scrollTo({
                  top: rect.top + window.pageYOffset - offset, // Account for page scroll and offset
                  behavior: 'smooth', // Smooth scrolling
                });
              }
            }
          }, [location]);
      return (
            <>
                 <Header/>
                  <section id="home" >
                  <div className="conatainerHome">
                        <div className='leftHomeDiv'>
                              <h1 className='headingHome'>Hey! l am Web Developer</h1>
                              <p className='paraHome'>"I am a Web Developer with hands-on experience in building and designing websites and applications. My expertise includes working with HTML, CSS,React.js, Node.js and Express and I have completed a 3-month internship where I applied my skills in real-world projects."</p>
                              <div className='homeBtnDiv'>
                                    <button className='btnHomeabt'><NavLink to="/about" className="btnLink">LEARN MORE</NavLink>
                                    </button>
                                    <button className='btnHomeHire'><NavLink to="/contact" className="btnLink">HIRE ME</NavLink>
                                    </button>
                              </div>
                        </div>
                        <div className='imgHomeDiv'>
                              <div className='outerRadius'>
                                    <div className='innerRadius'>
                                          <div className='picRadius'>
                                                <img src="/images/profile_final.jpg" alt="Profile" />
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
                  </section>
                
            <section id="skill" style={{ height: "100vh" }}>
                    <Skill/>
            </section>
            <section id="work" style={{ height: "100vh" }}>
                    <Work/>
            </section>
            <section id="about" style={{ height: "100vh" }}>
                    <About/>
            </section>
            <section id="contact" style={{ height: "100vh" }}>
                    <Contact/>
            </section>
                 
         <Footer/>
            </>
      )
}
export default Home;