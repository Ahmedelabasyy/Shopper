import {BsCartPlusFill, BsFillCartCheckFill} from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {getProductDetails} from '../../features/slice/appSlice';
import './card.scss';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/slice/cartSlice';


const Card = ({catego}) => {
    let [addCart, setAddCart] = useState(false);
    const dispatch = useDispatch();

    let handleCartIcon = (id) => {
        setAddCart(prev => !prev)
    }

    let handleClickDetails = () => {
        dispatch(getProductDetails(catego))
    }

    let handleAddToCart = () => {
        dispatch(addToCart(catego));
    }

    return (
        <div className="card col-12 col-md-4 col-lg-3 me-4 mb-5" style={{width: '18rem'}}>
            <Link to={`productdetails/${catego.id}`}>
                <img src={catego.image} className="card-img-top" alt="img" onClick={() => handleClickDetails()}/>
            </Link>
            <div className="card-body">
                <h6 className="card-title">{catego.title}</h6>
                <div className="info mt-3 d-flex align-items-center justify-content-between w-100">
                <p className="card-text p-0 m-0">Price: ${catego.price}</p>
                <div className="info__icon">
                    {addCart 
                    ? <BsFillCartCheckFill className='check__icon' onClick={() => handleCartIcon(catego.id)}/> 
                    : <BsCartPlusFill className='plus__icon' onClick={() => { 
                                handleCartIcon(catego.id);
                                handleAddToCart();
                            }
                        }/>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card