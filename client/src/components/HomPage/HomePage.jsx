import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import RecipeList from "./RecipeList/RecipeList";
import SearchInput from "./SearchInput/SearchInput";
import Filters from "./Filters/Filters";
import { getAllRecipes, getDiets } from '../../Redux/actions'
import s from './HomePage.module.css';

export default function HomePage() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        const fn = async () => {
            try {
                await dispatch(getAllRecipes());
                await dispatch(getDiets())
            } catch (e) {
                return e
            }
        };
        fn();
    }, [])
    const { recipes, diets } = useSelector((state) => state) || false;
    if (recipes && diets) {
        return (
            <div className={s.root}>
                <div>
                    <SearchInput />
                </div>
                <div className={s.FC}>
                    <div>
                        <Filters diets={diets} />
                    </div>
                    <div>
                        <RecipeList recipes={recipes} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p>cargando</p>
        )
    }
}