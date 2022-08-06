import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export default function Filters (){
    const recipes = useSelector((state)=> state.recipes);
    function compareFunction(x, y){
        if(x.title < y.title){
            return -1
        } else if(x.title > y.title){
            return 1
        };
        return 0
    };
    function stateSort(array, order){
        const ascen = array.sort(compareFunction)
        if(order === 'ascendant'){
            return ascen
        } else {
            return ascen.reverse()
        }
    } 
    return (
        <div>
            <form>
                <input type="checkbox" />
            </form>
        </div>
    )
}