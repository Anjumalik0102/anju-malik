import '../styles/about.css'
const About=()=>{
    return(
       <>
       <div className="conatainerAbout">
           <div className='leftDivAbout'>
           <div className="leftInnerDivAbt">
           <img  src="/images/abt8.jpg" alt="Profile" /></div>
           </div>
           <div className='rightDivAbout'>
            <div className='rightInnerAbt'>
                <h4 className='aboutHeading'>Web Developer</h4>
                <p className='abtPara'>As a passionate Web Developer, I am constantly exploring new technologies and techniques to create dynamic, user-friendly websites and applications.</p>
                <h4 className='aboutHeading'>Personel Achivements</h4>
                    <p className='abtPara'>Consistently ranked as the top student from 1st to 12th grade, maintaining a 90+ percentage throughout all board exams.</p>
                    <p className='abtPara'> Awarded **First Position** in school speech competitions, showcasing excellent verbal communication and presentation skills.</p>
                    <h4 className='aboutHeading'>Education</h4>
                  <li className='abtPara'> Master of Computer Applications (2023-2025)</li>
                   <p className='abtParaMin'>Kurukshetra University, Kurukshetra</p>
                   <li className='abtPara'> Bachelor of Computer Applications (2020-2023) </li>
                   <p className='abtParaMin'>Kurukshetra University, Kurukshetra <span className='cgpa'>Overall CGPA : 9.1</span></p>
                
            </div>
           </div>
       </div>
       </>
    )
}
export default About;