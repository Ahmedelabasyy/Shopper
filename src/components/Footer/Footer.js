import './footer.scss';
import {Link} from 'react-router-dom'
import {FaOpencart} from 'react-icons/fa';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';
const footer = () => {
    return (
        <footer className='text-center pt-5 pb-4 text-light'>
            <div className="container">
                <Link className='footer__heading' to="/">Sh<span> <FaOpencart /></span> pper</Link>
                <ul className="socials m-auto mt-3 mb-3 list-unstyled d-flex align-items-center justify-content-between">
                    <li><a href="https://www.facebook.com/mesho.elabasy" target="_blank" rel="noopener noreferrer"><ImFacebook /></a></li>
                    <li><a href="https://github.com/Ahmedelabasyy" target="_blank" rel="noopener noreferrer"><BsGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/ahmed-elabasy-6391111b2/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
                </ul>
                <p>Made By Ahmed Elabasy &copy; 2022</p>
            </div>
        </footer>
    )
}

export default footer