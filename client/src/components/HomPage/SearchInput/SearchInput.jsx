import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../../Redux/actions';
import React from 'react';
import s from './SearchInput.module.css'

export default function SearchInput() {
    const [state, setState] = React.useState('')
    const dispatch = useDispatch();
    function handleName(e) {
        setState(e.target.value)
    };
    return (
        <div className={s.root}>
            <p>Search recipes by name: </p>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(getRecipesByName(state))
                }}>
                    <input className={s.input} type="text" value={state} onChange={(e) => handleName(e)} placeholder='...' />
                    <button className={s.btn} type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}