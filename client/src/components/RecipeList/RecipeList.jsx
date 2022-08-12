import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, getDiets } from '../../Redux/actions/index';
import RecipeCard from "./RecipeCard";
import SearchInput from "../SearchInput/SearchInput";
import Filters from "../Filters/Filters";

export default function RecipeList() {
    const [page, setPage] = React.useState(0);
    const dispatch = useDispatch();
    React.useEffect(() => {
        const fn = async () => {
            try{
                await dispatch( getAllRecipes());
                await dispatch(getDiets())
            }catch(e){
                return new Error(e)
            }
        };
        fn();
    }, [])
    const { recipes, diets } = useSelector((state) => state) || false;
    function handlerPage() {
        const repicePage = recipes.slice(page, page + 9);
        return repicePage;
    };
    function nextPage() {
        if (recipes[page + 9])
            setPage(page + 9)
    };
    function prevPage() {
        if (page > 0) {
            setPage(page - 9)
        }
    };
    if (recipes) {
        return (
            <div>
                <SearchInput />
                <Filters diets={diets} />
                <p>Let's see recipes</p>
                <button onClick={prevPage}>Back</button>
                <button onClick={nextPage}>Next</button>

                {
                    handlerPage().map((x) => {
                        return <RecipeCard key={x.id} id={x.id} image={x.image} title={x.title} diets={typeof(x.diets[0]) === 'object' ? x.diets.map((x) => x.name) : x.diets}
                         />
                    })
                }
            </div>
        )
    } else {
        return (
            <p>cargando</p>
        )
    }
}