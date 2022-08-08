import { Link } from 'react-router-dom';

export default function RecipeCard({ id, image, title, diets }) {
    return (
        <div>
            <Link to={`/recipe/${id}`}>
                <h3>{title}</h3>
            </Link>           
            <img src={image} alt={`${title}`} />
            <p>{`${diets}`} </p>
        </div>
    )
} 