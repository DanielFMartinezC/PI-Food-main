import { Link } from 'react-router-dom';
import s from './CSS/Button.module.css'

export default function ButtonRestoreRecipe() {
    return (
        <div className={s.divBTN}>
            <Link to='/DeletedRecipes'>
                <button className={s.btnRR}>Deleted Recipes</button>
            </Link>
        </div>
    )
}