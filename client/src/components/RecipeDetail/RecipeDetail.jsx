import { useParams } from 'react-router-dom';
import {getRecipesDetail} from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'; 
import React from 'react';
import Steps from './Steps';
import ReactHtmlParser from 'react-html-parser'

const RecipeDetail = ()=>{
    const dispatch = useDispatch();
    const { id } = useParams();
    React.useEffect(()=>{
        const fn = async()=>{
            await dispatch(getRecipesDetail(id)) 
        }
        fn();
    },[])
    const {recipeDetail} = useSelector((state)=>state) || false;
    console.log(recipeDetail)
    if(recipeDetail){
        console.log(recipeDetail)
        const { title, image, diets, dishTypes, healthScore, summary, steps } = recipeDetail;
        console.log(steps, 'steps')
        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt={title}/>
                <p>{diets}</p>
                <p>{dishTypes}</p>
                <p>{healthScore}</p>
                <div>{ ReactHtmlParser(summary)}</div>
                {
                    steps ? steps.map(x => <Steps key={x.number} number={x.number} step={x.step}/>) : <p>There is no instrucctions</p>
                } 
            </div>
        )
    }else{
        return (
            <p>chao pa</p>
        )
    }
    
};
export default RecipeDetail