import { useDispatch } from 'react-redux';
import React from 'react';
import { changeOrder, filterByDiets } from '../../../Redux/actions';
import InputDiets from './InputDiets';

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
        <div>
            <p>Sort by:</p>
            <div>
                <form onChange={(e) => {
                    e.preventDefault();
                    dispatch(changeOrder(e.target.value, e.target.name))
                }} >
                    <p>Alphabet order:</p>
                    <select name='Alphabetical'>
                        <option value="-">-</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                    <p>Health score:</p>
                    <select name='Numerical' >
                        <option value="-">-</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </form>
            </div>
            <div>
                <form onChange={(e) => { handleCheckBox(e) }}>
                    <p>Diet types:</p>
                    {
                        diets.map(x => {
                            return <InputDiets key={x.id} value={x.name} />
                        })
                    }
                </form>
            </div>
        </div>
    )
}