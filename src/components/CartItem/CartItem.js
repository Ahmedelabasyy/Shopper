import './cartitem.scss'
import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/slice/cartSlice';
// import { countTotalPrice } from '../../features/slice/cartSlice';

const CartItem = ({data}) => {
    const [quantityCounter, setQuantityCounter] = useState(1);
    const dispatch = useDispatch();
    let totalPrice = Math.round(quantityCounter * data.price);
    console.log("price", totalPrice)
    const handleQuantityAddition = () => {
        setQuantityCounter(quantityCounter + 1);
    }
    
    const handleQuantitySubtraction = () => {
        if (quantityCounter > 0) {
            setQuantityCounter(quantityCounter - 1);
        }
    }

    const handleDeleteFromCart = () => {
        dispatch(removeFromCart(data.id))
    }

    return (
        <div className='cart__item p-5'>
            <div className="row">
                <div className="col-12 col-lg-2">
                    <div className="item__img mb-4">
                        <img className='img-fluid w-100' src={data.image} alt="" />
                    </div>
                </div>
                <div className="col-12 col-lg-10">
                    <div className="item__info">
                        <h6 className='w-50'>{data.title}</h6>
                        <p>{data.category}</p>
                        <p>${data.price}</p>
                        <div className="quantity__wrapper mt-4 d-flex justify-content-between align-items-center">
                            <div className='quantity__container d-flex justify-content-between align-items-center'>
                                <p className='me-3 p-0 mb-0'>QTY: </p>
                                <AiOutlineMinus style={{cursor: "pointer"}} onClick={() => handleQuantitySubtraction()}/>
                                <div className="quantity ms-3 me-3 pb-2" style={{fontSize: 20}}>{quantityCounter}</div>
                                <AiOutlinePlus style={{cursor: "pointer"}} onClick={() => handleQuantityAddition()}/>
                            </div>
                            <p className='add__cart fs-5'>Subtotal({quantityCounter} items) ${Math.round(quantityCounter * data.price)}</p>
                        </div>
                        <button className='main-button mt-4' onClick={() => handleDeleteFromCart()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem