import './navbar.scss';
import {useSelector} from 'react-redux';
import {FaOpencart, FaUserAlt} from 'react-icons/fa';
import {HiShoppingCart} from 'react-icons/hi';
import {NavLink , Link} from 'react-router-dom'
const Navbar = () => {

    let {cartItems} = useSelector(state => state.cart)

    return (
        <nav className="navbar navbar-expand-lg p-3 fixed-top">
            <div className="container-fluid">
                <Link className='navbar-brand' to="/">Sh<span> <FaOpencart /></span> pper</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav m-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact us</NavLink>
                </div>
                <div className='login'>
                    <NavLink to="/login"><FaUserAlt /></NavLink>
                    <NavLink className="items__number" to="/cart"><span className='text-light d-flex'>{cartItems.length}</span><HiShoppingCart /></NavLink>

                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar