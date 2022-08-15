import React from "react";
import RecipeCard from "./RecipeCard";
import s from './CSS/RecipeList.module.css'

export default function RecipeList({ recipes }) {
    const [page, setPage] = React.useState(0);
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
    function btnPage(e) {
        setPage((9 * e.target.value) - 9)
    }
    if (recipes) {
        let numOfButtons = Math.ceil(recipes.length / 9);
        let arr = []
        for (let i = 1; i <= numOfButtons; i++) {
            arr.push(i)
        }

        return (
            <div className={s.root}>
                <h3>Let's see recipes</h3>
                <div className={s.btns}>                   
                    <button className={s.btnB} onClick={prevPage}>Back</button>
                    {
                        arr.map(x => {
                            return <button className={s.btn} key={x} value={x} onClick={(e) => btnPage(e)}>{x}</button>
                        })
                    }
                    <button className={s.btnN} onClick={nextPage}>Next</button>
                </div>
                <div className={s.list}>
                    {
                        handlerPage().map((x) => {
                            return <RecipeCard key={x.id} id={x.id} image={x.image} title={x.title} diets={typeof (x.diets[0]) === 'object' ? x.diets.map((x) => x.name) : x.diets}
                            />
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <p>cargando</p>
        )
    }
}