import { useSelector } from 'react-redux'
import './productdetails.scss'

const ProductDetails = () => {
    let {selectedProduct} = useSelector(state => state.app);
    console.log(selectedProduct);
    return (
        <div className='produc__details text-light'>
            <div className="container">
                <h3 className='mb-5'>Product Details ?</h3>
                <div className="row">
                    {selectedProduct 
                    ? <>
                        <div className="col-12 col-lg-4">
                            <img className='img-fluid w-100' src={selectedProduct.image} alt="img" />
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="product__info ms-3 pt-4 h-75">
                                <p>Product Id: <span>{selectedProduct.id}</span></p>
                                <p>Category: <span>{selectedProduct.category}</span></p>
                                <p>Title: <span>{selectedProduct.title}</span></p>
                                <p>Description: <span>{selectedProduct.description}</span></p>
                                <p>Rating: <span>{selectedProduct.rating.rate}</span></p>
                                <p>Price: <span>${selectedProduct.price}</span></p>
                                <button className='main-button mt-4'>Add to cart</button>
                            </div>
                        </div>
                    </> : <div className='fs-5 text-light'>Loaading</div>}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails