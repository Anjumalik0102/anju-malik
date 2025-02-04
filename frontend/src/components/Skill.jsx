import '../styles/skill.css'
const Skill=()=>{
    return(
       <>
       <div className="conatainerSkill">
             <div className='leftSkillDiv'>
                <div className='innerLeftDiv'>
                <h4 className='skillHeading'>LANGUAGES</h4>
               <ul className='languagealistDiv'>
                <li className='languagealist'><span className='languageSpan'>Js</span></li>
                <li className='languagealist'><span className='languageSpan'>HTML5</span></li>
                <li className='languagealist'><span className='languageSpan'>CSS</span></li>
               </ul>
               <h4 className='skillHeading'>FRAMEWORKS</h4>
               <ul className='framelistDiv'>
                <li className='framelist'><div className="frameCard">React.Js</div></li>
                <li className='framelist'><div className="frameCard">Node.Js</div></li>
                <li className='framelist'><div className="frameCard">Express</div></li>
               </ul>
               <div className='dbDivs'>
                <div>
               <h4 className='skillHeadingvs'>DATABASE</h4>
               <ul className='framelistDiv'>
               <li className='framelist'><div className="frameCard">MongoDB</div></li></ul>
               </div>
               <div>
               <h4 className='skillHeadingvs'>DEV TOOL</h4>
               <ul className='framelistDiv'>
               <li className='framelist'><div className="frameCard">Vs Code</div></li></ul>
               </div>
               </div>
                </div>
             </div>
             <div className='rightSkillDiv'>
            <div className="rightInnerDivSkill">
                <img  src="/images/skil2.jpg" alt="Profile" />
                </div>
             </div>
       </div>
       </>
    )
}
export default Skill;