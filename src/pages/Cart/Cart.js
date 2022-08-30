import { useSelector } from 'react-redux/es/exports';
import CartItem from '../../components/CartItem/CartItem';
import './cart.scss';

const Cart = () => {
    let {cartItems} = useSelector(state => state.cart);

    console.log(cartItems);
    return (
        <div className='cart text-light p-5 pb-5'>
            <div className="container">
                <h2 className='cart__head pb-4'>Shopping Cart</h2>
                {cartItems.length > 0 ? cartItems.map((item) => (
                    <CartItem key={item.id} data={item}/>
                )) : <h2 className='mt-5 mb-5'>No Items to Show !</h2>}
                {cartItems.length > 0 ? <div className="total">Subtotal </div> : null}
            </div>
        </div>
    )
}

export default Cart