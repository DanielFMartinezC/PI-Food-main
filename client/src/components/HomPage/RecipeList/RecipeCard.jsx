import { Link } from 'react-router-dom';
import s from './CSS/RecipeCard.module.css'

export default function RecipeCard({ id, image, title, diets }) {

    return (
        <div>
            <Link to={`/recipe/${id}`}>
                <p>See detail</p>
            </Link>
            <h3 className={s.title}>{title}</h3>
            {
                image ? <img src={image} alt={`${title}`} /> : null
            }
            <p>{diets.map(x => ' ' + x)}</p>
        </div>
    )
} 