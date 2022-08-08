import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, getDiets } from '../../Redux/actions/index';
import RecipeCard from "./RecipeCard";
import SearchInput from "../SearchInput/SearchInput";
import Filters from "../Filters/Filters";

export default function RecipeList () {
    const dispatch = useDispatch();
    React.useEffect(()=> {
        dispatch(getAllRecipes());
        dispatch(getDiets())
    },[]);
    const state = useSelector((state)=> state);
    
    if(state){
        console.log(state.recipes.diets)
        return(
            <div>
                <SearchInput/>
                <Filters diets={state.diets}/>                
                <p>Let's see recipes</p>
                {
                    state.recipes.map((x)=>{
                    return <RecipeCard key={x.id} id={x.id} image={x.image} title={x.title} diets={x.diets} />
                    })
                }
            </div>
        )
    }else{
        return (
            <p>cargando</p>
        )
    }
}