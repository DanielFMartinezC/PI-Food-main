import { Link } from 'react-router-dom';
import s from './CSS/Button.module.css'

export default function ButtonHome() {
    return (
        <div>
            <Link to='/Home'>
                <button className={s.btnHome}>Home</button>
            </Link>
        </div>
    )
}