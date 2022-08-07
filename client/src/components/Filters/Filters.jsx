import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { changeOrder } from '../../Redux/actions';
import InputDiets from './InputDiets';

export default function Filters ({diets}){
    const dispatch = useDispatch();
    console.log(diets)
    return (
        <div>
            <p>Sort by:</p>
            <div>
            <form> 
                <p>Alphabet order:</p>
                <select onChange={(e)=>{
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
                    <select onChange={(e)=>{
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
                <form>
                    {
                        diets.map(x=>{
                            return <InputDiets key={x.id} diet={x.name}/>
                        })
                    }
                </form>
            </div>
        </div>
    )
}