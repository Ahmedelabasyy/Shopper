
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.scss'
import Categorie from '../components/Categorie/Categorie';

const Owl = ({allCategories}) => {
    console.log("from",allCategories)
    return (
        <div>  
        <div className='container-fluid' >            
            <OwlCarousel items={3}  
            className="owl-theme"    
            nav  
            margin={15} >
            {allCategories.map((cat) => (
                <Categorie cat={cat}/>
            ))}
            </OwlCarousel>  
            </div>  
        </div> 
    )
}

export default Owl