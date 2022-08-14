import { useParams } from 'react-router-dom';
import { getRecipesDetail } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Steps from './Steps';
import ReactHtmlParser from 'react-html-parser';
import s from './CSS/RecipeDetail.module.css'

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
            <div className={s.root}>
                <div className={s.div1}>
                    <div>
                        {
                            image ? <img src={image} alt={title} className={s.image} /> : <p>There is no picture</p>
                        }
                    </div>
                    <div className={s.divInfo}>
                    <h3 className={s.title}>{title}</h3>
                        <div>
                            {
                                diets ? <p>Diet types: {renderDiets().map(x => ' ' + x + ',')}</p> : null
                            }
                        </div>
                        {
                            dishTypes ? <div>
                                <p>Dish types: {dishTypes.map(x => ' ' + x + ',')}</p>
                            </div> : null
                        }
                        <div>
                            <p>Health schore: {healthScore}</p>
                        </div>
                    </div>
                </div>
                <div className={s.summary}>{ReactHtmlParser(summary)}</div>
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