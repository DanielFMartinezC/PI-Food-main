import { useParams } from 'react-router-dom';
import {getRecipesDetail} from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'; 
import React from 'react';

export default function RecipeDetail (){
    const { id } = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state)=> state);
    React.useEffect(()=>dispatch(getRecipesDetail(id)),[]);
    // console.log(state.recipeDetail);
    console.log(state)
    if(state){
        console.log(state)
        const { title, image, diets, dishTypes, healthScore, summary, steps } = state.recipeDetail;
        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt={title}/>
                <p>{diets}</p>
                <p>{dishTypes}</p>
                <p>{healthScore}</p>
                {summary}
            </div>
        )
    }else{
        <p>cargando</p>
    }
}