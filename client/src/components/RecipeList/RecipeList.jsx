import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, getDiets } from '../../Redux/actions/index';
import RecipeCard from "./RecipeCard";
import SearchInput from "../SearchInput/SearchInput";
import Filters from "../Filters/Filters";

export default function RecipeList () {
    const dispatch = useDispatch();
    React.useEffect(async ()=> {
        await dispatch(getAllRecipes());
        await dispatch(getDiets())
    },[]);
    const state = useSelector((state)=> state);
    if(state){
        return(
            <div>
                <SearchInput/>
                <Filters diets={state.diets}/>                
                <p>hola</p>
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