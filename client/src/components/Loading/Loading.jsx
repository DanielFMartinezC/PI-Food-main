import s from './Loading.module.css'

export default function Loading(){
    return (
        <div className={s.root}>
            <div className={s.child}>
                <img className={s.image} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/37e19c53319193.592ffe63763e0.gif"/>
            </div>
        </div>
    )
}