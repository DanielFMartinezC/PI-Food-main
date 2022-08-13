import { Link } from 'react-router-dom';

export default function ButtonHome() {
    return (
        <div>
            <Link to='/Home'>
                <button>Home</button>
            </Link>
        </div>
    )
}