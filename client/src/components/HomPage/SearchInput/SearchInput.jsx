import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../../Redux/actions';
import React from 'react';

export default function SearchInput() {
    const [state, setState] = React.useState('')
    const dispatch = useDispatch();
    function handleName(e) {
        setState(e.target.value)
    };
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(getRecipesByName(state))
            }}>
                <input type="text" value={state} onChange={(e) => handleName(e)} />
                <button type='submit' />
            </form>
        </div>
    )
}