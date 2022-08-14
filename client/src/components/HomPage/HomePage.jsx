import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import RecipeList from "./RecipeList/RecipeList";
import SearchInput from "./SearchInput/SearchInput";
import Filters from "./Filters/Filters";
import { getAllRecipes, getDiets } from '../../Redux/actions'
// import NavBar from "../NavBar/NavBar";

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
    },[])
    const { recipes, diets } = useSelector((state) => state) || false;
    if (recipes && diets) {
        return (
            <div>
                <div>
                    <SearchInput />
                </div>
                <div>
                    <Filters diets={diets} />
                </div>
                <div>
                    <RecipeList recipes={recipes} />
                </div>
            </div>
        )
    } else {
        return (
            <p>cargando</p>
        )
    }
}