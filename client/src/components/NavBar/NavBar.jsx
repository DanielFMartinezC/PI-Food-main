import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <Link to='/Home'>
                <button>Home</button>
            </Link>
            <Link to='/CreateRecipe'>
                <button>Create recipe</button>
            </Link>
        </div>
    )
}