import { useDispatch } from 'react-redux';
import React from 'react';
import { changeOrder } from '../../Redux/actions';

export default function Filters (){
    const dispatch = useDispatch();

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
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </form>
            </div>
        </div>
    )
}