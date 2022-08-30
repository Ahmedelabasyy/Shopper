import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSelectedCategory } from '../../features/slice/appSlice';
import './Category.scss';

const Category = () => {
    let {cat} = useSelector(state => state.app);
    let {selectedCategory} = useSelector(state => state.app)
    let {isFulfilled} = useSelector(state => state.app)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSelectedCategory(cat))
    }, [dispatch, cat]);

    console.log("isfull", isFulfilled);
    return (
        <div className='category__wrapper '>
            <div className="container">
                <h2 className='text-light mb-5 mt-4 text-capitalize'>{cat}</h2>
                <div className="row">
                    {isFulfilled ? selectedCategory.map((catego) => (
                        <Card catego={catego} key={catego.id}/>
                    )) : <div className='text-light fs-2 w-50  m-auto mt-5'>Loading Products...</div>}
                </div>
            </div>
        </div>
    )
}

export default Category