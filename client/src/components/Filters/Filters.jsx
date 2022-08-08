import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { changeOrder, filterByDiets } from '../../Redux/actions';
import InputDiets from './InputDiets';

export default function Filters({ diets }) {
    let filterRecipes = [];
    // React.useEffect()
    const [dietFilter, setDietFilter] = React.useState([])
    const dispatch = useDispatch();
    console.log(dietFilter);
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
                <form>
                    <p>Alphabet order:</p>
                    <select onChange={(e) => {
                        e.preventDefault();
                        dispatch(changeOrder(e.target.value, 'Alphabetical'))
                    }}>
                        <option>-</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </form>
            </div>
            <div>
                <form>
                    <p>Health score:</p>
                    <select onChange={(e) => {
                        e.preventDefault();
                        dispatch(changeOrder(e.target.value, 'Numerical'))
                    }}>
                        <option>-</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </form>
            </div>
            <div>
                <form onClick={(e) => { handleCheckBox(e) }}>
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