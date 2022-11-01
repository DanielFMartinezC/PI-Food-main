import { useParams } from 'react-router-dom';
import { getRecipesDetail, recipeDetailReset } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Steps from './Steps';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import s from './CSS/RecipeDetail.module.css';
import axios from "axios";
import { RECIPES } from "../../constants";

const RecipeDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = React.useState(null)
    React.useEffect(() => {
        const fn = async () => {
            await dispatch(getRecipesDetail(id))
        }
        fn();
        function load() {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        };
        load()
        return function () {
            dispatch(recipeDetailReset())
        }
    }, [])
    const { recipeDetail } = useSelector((state) => state) || false;
    function renderDiets(diets) {
        if (typeof (diets[0]) === 'object') {
            return diets.map((x) => x.name)
        } else {
            return diets
        }
    };
    function showAlert(response) {
        // window.confirm(response)
        if (window.confirm(response)) {
            window.open("/Home", "_self");
        }
    };
    function deleteRecipe(id) {
        axios.delete(`${RECIPES}/${id}`).then(response => showAlert(response.data))
    };

    function confirmDelet(id) {
        if (window.confirm('Are you sure to delete the recipe? you can restore it later')) {
            deleteRecipe(id)
        }
    }

    if (recipeDetail) {

        const { title, image, diets, dishTypes, healthScore, summary, steps, aggregateLikes } = recipeDetail;
        if (loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className={s.root}>
                    <h3 className={s.title}>{title}</h3>
                    <div className={s.div1}>
                        <div>
                            {
                                image ? <img src={image} alt={title} className={s.image} /> : <p>There is no picture</p>
                            }
                        </div>
                        <div className={s.divInfo}>
                            <div>
                                <p> aggregateLikes: {aggregateLikes}</p>
                            </div>
                            <div>
                                {
                                    diets ? <p>Diet types: {renderDiets(diets).map(x => ' ' + x + ',')}</p> : null
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
                    <div className={s.steps}>
                        {
                            steps ? steps.length && steps[0]['step'] ? steps.map(x => <Steps key={x.number} number={x.number} step={x.step} />) : <p className={s.p}>There is no instrucctions</p> : null
                        }
                    </div>
                    <div className={s.divbtnDelete}>
                        <button className={s.btnDelete} onClick={() => confirmDelet(id)}>Delete Recipe</button>
                    </div>
                </div>
            )
        }

    } else {
        return (
            <Loading />
        )
    }

};
export default RecipeDetail