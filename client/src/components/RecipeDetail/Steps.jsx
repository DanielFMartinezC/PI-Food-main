import s from './CSS/Steps.module.css'

export default function Steps({ number, step }) {
    return (
        <div className={s.root}>
            <h3 className={s.title}>step {number}</h3>
            <p className={s.inst}>{step}</p>
        </div>
    )
}