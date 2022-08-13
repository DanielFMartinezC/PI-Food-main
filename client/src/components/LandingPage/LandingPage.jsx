import { Link } from 'react-router-dom';
import s from './LandingPage.module.css'

export default function LandingPage(){
    return (
        <div className={s.root}>
            <Link to='/home'>
                <button className={s.btn}>Welcome</button>
            </Link>
        {/* <img src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80" alt='aesthetic food'/> */}
        </div>
    )
}