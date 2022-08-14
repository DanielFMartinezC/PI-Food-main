import { Link } from 'react-router-dom';
import s from './LandingPage.module.css'

export default function LandingPage(){
    return (
        <div className={s.root}>
            <Link to='/home'>
                <button className={s.btn}>Welcome</button>
            </Link>
        </div>
    )
}