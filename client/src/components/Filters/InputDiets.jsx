
export default function InputDiets ({value}){
    return (
        <div> 
            <input type="checkbox" name="diets" value={value} />{value}<br/>
        </div>
    )
}