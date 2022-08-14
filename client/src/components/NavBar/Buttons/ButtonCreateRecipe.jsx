import { Link } from 'react-router-dom';
import s from './CSS/Button.module.css'

export default function ButtonCreateRecipe() {
    return (
        <div>
            <Link to='/CreateRecipe'>
                <button className={s.btnCR}>Create recipe</button>
            </Link>
        </div>
    )
}