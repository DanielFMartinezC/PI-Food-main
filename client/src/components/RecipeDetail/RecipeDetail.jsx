import { useParams } from 'react-router-dom';
import {getRecipesDetail} from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'; 
import React from 'react';
import Steps from './Steps';

export default function RecipeDetail (){
    const dispatch = useDispatch();
    const recipeDetail = useSelector((state)=> state.recipeDetail);
    const { id } = useParams();
    React.useEffect(()=>{  
        if(id){
            dispatch(getRecipesDetail(id))
        }
    },[]);
    if(recipeDetail){
        const { title, image, diets, dishTypes, healthScore, summary, steps } = recipeDetail;
        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt={title}/>
                <p>{diets}</p>
                <p>{dishTypes}</p>
                <p>{healthScore}</p>
                {summary}
                {
                    steps ? steps.map(x=>{
                        return <Steps key={x.number} number={x.number} step={x.step} />
                    }) : <p>pere</p>
                }
                
            </div>
        )
    }else{
        <p>cargando</p>
    }
}