import React from "react";
import RecipeCard from "./RecipeCard";
import s from './CSS/RecipeList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nextPageRedux, prevPageRedux, btnPageRedux } from '../../../Redux/actions/index'

export default function RecipeList({ recipes }) {
    const dispatch = useDispatch();
    const { page } = useSelector((state) => state)
    function handlerPage() {
        const repicePage = recipes.slice(page, page + 9);
        return repicePage;
    };
    function nextPage() {
        dispatch(nextPageRedux())
    };
    function prevPage() {
        dispatch(prevPageRedux())
    };
    function btnPage(e) {
        dispatch(btnPageRedux(e.target.value))
    };

    let numOfButtons = Math.ceil(recipes.length / 9);
    let arr = []
    for (let i = 1; i <= numOfButtons; i++) {
        arr.push(i)
    };

    // if (!recipes.length) {
    //     return (
    //         <div className={s.root}>
    //             <h1 className={s.h}>No recipe found</h1>
    //         </div>
    //     )
    // } else {
        function currBtn(page, btn) {
            if((page + 9)/9 === btn) {
                return true
            };
            return false
        }
        return (
            <div className={handlerPage().length < 2 ? s.root2 : null}>
                <h3 className={s.h3}>Let's see recipes</h3>
                <div className={s.btns}>
                    <button className={s.btnB} onClick={prevPage}>Back</button>
                    {
                        arr.map(x => {
                            return <button className={currBtn(page, x) ? s.currentBtn : s.btn} key={x} value={x} onClick={(e) => btnPage(e)}>{x}</button>
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
    // }
}