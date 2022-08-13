import { Link } from 'react-router-dom';

export default function RecipeCard({ id, image, title, diets }) {
    return (
        <div>
            <Link to={`/recipe/${id}`}>
                <p>See detail</p>
            </Link>
            <h3>{title}</h3>
            {
                image ? <img src={image} alt={`${title}`} /> : null
            }
            <p>{`${diets}`} </p>
        </div>
    )
} 