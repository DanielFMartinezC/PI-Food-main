import s from './CSS/InputDiets.module.css'

export default function InputDiets ({value}){
    return (
        <div> 
            <input className={s.input} type="checkbox" name="diets" value={value} />{value}<br/>
        </div>
    )
}