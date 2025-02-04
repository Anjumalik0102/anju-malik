import "../styles/footer.css"
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
const Footer=()=>{
    return(
       <>
       <div className="mainfooterdiv">
       <div className="conatainerFooter">
             <div className="leftFooter">
             <div className='logoFooter'>
                <img  src="/images/footer_logo.jpg" alt="Profile" />
                </div>
                <p className="leftFooterPara">I am passionate about learning and growing in the field, and I am eager to contribute my skills and continue developing my expertise.</p></div>
             <div className="contactFooter">
                <h4 className="footerheading">Contact Details</h4>
                <ul className="listFooter">
                    <li className="teleList">
                    <span className="conatctIcon"><FiPhoneCall /></span> 8708957953
                    </li>
                    <li className="teleList">
                    <span className="conatctIcon"><TfiEmail /></span> anjumalik0102@gmail.com
                    </li>
                    <li className="teleList">
                    <span className="conatctIcon"><CiLocationOn /></span> Kaithal, Haryana
                    </li>

                </ul>
             </div>
             <div className="socialMediaDiv">
             <h4 className="footerheading">Social Accounts</h4>
             <div className="socialMedia">
                <span className="socialIcon"><NavLink to="https://www.instagram.com/_anju_malik" className="socialIconLink" ><FaInstagram /></NavLink></span>
                <span className="socialIcon"><NavLink to="https://www.linkedin.com/in/Anju Malik"className="socialIconLink" ><FaLinkedinIn /></NavLink></span>
                </div>
             </div>
       </div>
       </div>
       </>
    )
}
export default Footer;