import { Link } from 'react-router-dom';
import './home.scss';
import {useSelector, useDispatch} from 'react-redux';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';
import Owl from '../../Owl/Owl';
import { useEffect } from 'react';
import { fetchAllCategories } from '../../features/slice/appSlice';
const Home = () => {
    let {allCategories} = useSelector(state => state.app);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCategories());
    }, [dispatch]);
    console.log(allCategories)
    return (
        <div className="home pt-4 pb-4 text-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 left__section">
                        <h2 className='mb-5'>Minimalism<br/>at its finest</h2>
                        <div className='shop__all text-uppercase'>Got You</div>
                        <Link className='main-button text-uppercase' to="/products">Shop all</Link>
                        <ul className="socials list-unstyled d-flex align-items-center justify-content-between">
                            <li><a href="https://www.facebook.com/mesho.elabasy" target="_blank" rel="noopener noreferrer"><ImFacebook /></a></li>
                            <li><a href="https://github.com/Ahmedelabasyy" target="_blank" rel="noopener noreferrer"><BsGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/ahmed-elabasy-6391111b2/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-8">
                        <Owl allCategories={allCategories}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;