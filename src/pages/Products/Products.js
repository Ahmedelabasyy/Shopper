import './products.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { fetchAllProducts } from '../../features/slice/productsSlice';
import Card from '../../components/Card/Card';

const Products = () => {

    let {allProducts} = useSelector(state => state.products);
    let {ready} = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    console.log("alllllllll", allProducts);
    return (
        <>
            <h2>Products</h2>
            <div className='pro text-light'>
                <div className="container">
                    <div className="row">
                    {ready 
                    ? allProducts.map((product) => (
                        <Card catego={product}/>
                    ))
                    : <div className='text-light fs-5'>Loading ...</div>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products