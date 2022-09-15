import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoD from '../../images/logo-d.png'
import LogoSubtitle from '../../images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faDiscord,
}from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoD} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink> 
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink> 
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink> 
        </nav> 
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/david-wamai-0a9b88200/'>

                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/davwamai'>

                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCQuOKRkjsNgrfKyj9mDFH_g'>

                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://discord.gg/yw9XPsnhRn'>

                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)


export default Sidebar