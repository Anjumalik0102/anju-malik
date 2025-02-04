import "../styles/work.css"
const Work = () => {
    return (
        <>
            <div className="conatainerWork">
                <div className='leftDivWork'>
                    <div className="leftInnerDivWrk">
                <img  src="/images/abt2.jpg" alt="Profile" /></div>
                </div>
                <div className='rightDivWork'>
                    <div className='rightInnerWork'>
                        <h4 className='workHeading'>Work Experience</h4>
                        <p className="para1Work">Eways Soft Solutions, Panchkula</p>
                        <p className="para2Work"><i>React Developer &nbsp;&nbsp; May 2024 - August 2024</i></p>
                        <p className='workPara'>Completed an on-site internship with a leading construction company.</p>
                        <p className='workPara'>Collaborated with the web development team to build web applications and user interfaces for various products.</p>
                        <h4 className='workHeading'>Projects</h4>
                        <p className="para1Work">The Gift Portal</p>
                        <p className='workPara'>This Project is an online platform that
                            specializes in offering a wide range of products that are
                            suitable for gifting purposes. These websites cater to
                            individuals and businesses looking for thoughtful and
                            appropriate gifts for various occasions such as birthdays, weddings, etc.</p>
                            <p  className="para2Work"><i>url:https://thegiftportal.com/</i></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Work;