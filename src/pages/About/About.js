import { Link } from 'react-router-dom';
import './about.scss';

const About = () => {
    return (
        <div className='about text-center pt-5 pb-5'>
                <h2 className='about__heading text-light fs-1 p-1'>About Us</h2>
                <div className='text-light'>
                    <div className="container">
                        <div className="about__section">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="about__img">
                                            <img className='img-fluid' src="assets/ab.svg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="about__paragraph d-flex justify-content-center align-items-center h-100">
                                            <p className='lead fs-2'>We believe that good design is powerful,<br/>hard work is essential,and exploring the<br/>unknown is important</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="all pt-5 pb-5 w-100">
                        <p className='mb-5 pt-5'>We got all the products that<br/>you are searching for.</p>
                        <Link to="/products" className='main-button'>Shop Now</Link>
                    </div>

                    <div className="about__section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="about__paragraph d-flex justify-content-center align-items-center mb-5 h-100">
                                        <p className='lead fs-2'>You can contact with our live agents<br/>at any time you are facing a problem<br/>by clicking here <br/> <br/><Link to="/contact" className='main-button fs-5'>Contact us</Link></p>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="about__img">
                                        <img className='img-fluid' src="assets/contact.svg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About