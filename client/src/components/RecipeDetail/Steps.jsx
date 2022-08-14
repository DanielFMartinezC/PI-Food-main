import s from './CSS/Steps.module.css'

export default function Steps({ number, step }) {
    return (
        <div className={s.root}>
            <h4 className={s.title}>step {number}</h4>
            <p className={s.inst}>{step}</p>
        </div>
    )
}