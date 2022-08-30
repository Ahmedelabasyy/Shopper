import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedCategory } from "../../features/slice/appSlice";
import "./categorie.scss";

const Categorie = ({cat}) => {
    const dispatch = useDispatch();
    let handleCategory = () => {
        dispatch(getSelectedCategory(cat));
    }

    return (
        <Link to={`category`} onClick={() => handleCategory()}>
            <div className="cat__wrapper">
                <img className="rounded-2" style={{height: 520, width:"100%" }} src={`assets/${cat}.jpg`} alt="img" />
                <span className="text-capitalize">{cat}</span>
            </div>
        </Link>
    )
}

export default Categorie