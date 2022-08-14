import { useParams } from 'react-router-dom';
import { getRecipesDetail } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Steps from './Steps';
import ReactHtmlParser from 'react-html-parser';

const RecipeDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    React.useEffect(() => {
        const fn = async () => {
            await dispatch(getRecipesDetail(id))
        }
        fn();
    })
    const { recipeDetail } = useSelector((state) => state) || false;
    if (recipeDetail) {
        const { title, image, diets, dishTypes, healthScore, summary, steps } = recipeDetail;
        function renderDiets() {
            if (typeof (diets[0]) === 'object') {
                return diets.map((x) => x.name)
            } else {
                return diets
            }
        }
        return (
            <div>
                <h3>{title}</h3>
                {
                    image ? <img src={image} alt={title} /> : <p>There is no picture</p>
                }
                {
                    diets ? <p>Diet types: {renderDiets().map(x => ' ' + x + ',')}</p> : null
                }
                <p>Dish types: {dishTypes.map(x => ' ' + x + ',')}</p>
                <p>Health schore: {healthScore}</p>
                <div>{ReactHtmlParser(summary)}</div>
                {
                    steps ? steps.length && steps[0]['step'] ? steps.map(x => <Steps key={x.number} number={x.number} step={x.step} />) : <p>There is no instrucctions</p> : null
                }
            </div>
        )
    } else {
        return (
            <p>chao pa</p>
        )
    }

};
export default RecipeDetail