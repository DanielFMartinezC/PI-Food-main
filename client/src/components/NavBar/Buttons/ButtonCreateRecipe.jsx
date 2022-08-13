import { Link } from 'react-router-dom';

export default function ButtonCreateRecipe() {
    return (
        <div>
            <Link to='/CreateRecipe'>
                <button>Create recipe</button>
            </Link>
        </div>
    )
}