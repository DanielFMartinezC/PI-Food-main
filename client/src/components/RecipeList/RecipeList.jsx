import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../Redux/actions/index';
import RecipeCard from "./RecipeCard";
import SearchInput from "../SearchInput/SearchInput";

export default function RecipeList () {
    const dispatch = useDispatch();
    React.useEffect(()=> dispatch(getAllRecipes()),[]);
    const state = useSelector((state)=> state);
    // console.log(recipes)
    if(state){
        return(
            <div>
                <SearchInput/>
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