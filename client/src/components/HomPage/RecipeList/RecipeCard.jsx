import { Link } from 'react-router-dom';
import s from './CSS/RecipeCard.module.css'

export default function RecipeCard({ id, image, title, diets }) {

    return (
        <div className={s.root}>
            <div className={s.TD}>
            <Link className={s.a} to={`/recipe/${id}`}>
                <button className={s.btn}>See detail</button>
            </Link>
            <h3 className={s.title}>{title}</h3>
            </div>
            <p className={s.diets}>{diets.map(x => ' ' + x + ',')}</p>
            {
                image ? <img className={s.image} src={image} alt={`${title}`} /> : null
            }
            
        </div>
    )
} 