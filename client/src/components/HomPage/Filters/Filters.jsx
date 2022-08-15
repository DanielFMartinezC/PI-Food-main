import { useDispatch } from 'react-redux';
import React from 'react';
import { changeOrder, filterByDiets } from '../../../Redux/actions';
import InputDiets from './InputDiets';
import s from './CSS/Filters.module.css'

export default function Filters({ diets }) {
    const [dietFilter, setDietFilter] = React.useState([])
    const dispatch = useDispatch();
    React.useEffect(() => { dispatch(filterByDiets(dietFilter)) }, [dietFilter])
    function handleCheckBox(e) {
        if (e.target.checked) {
            setDietFilter(dietFilter => [...dietFilter, e.target.value]);
        }
        if (!e.target.checked) {
            setDietFilter(dietFilter => [...dietFilter].filter(x => x !== e.target.value));
        };
    }
    return (
        <div className={s.root}>
            <p>Sort by:</p>
            <div>
                <form onChange={(e) => {
                    e.preventDefault();
                    dispatch(changeOrder(e.target.value, e.target.name))
                }} >
                    <p className={s.p}>Alphabet order:</p>
                    <select name='Alphabetical' className={s.input}>
                        <option value="-">-</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                    <p className={s.p}>Health score:</p>
                    <select name='Numerical' className={s.input}>
                        <option value="-">-</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </form>
            </div>
            <div>
                <form onChange={(e) => { handleCheckBox(e) }}>
                    <p className={s.p}>Diet types:</p>
                    <div>
                    {
                        diets.map(x => {
                            return <InputDiets key={x.id} value={x.name} />
                        })
                    }
                    </div>
                </form>
            </div>
        </div>
    )
}