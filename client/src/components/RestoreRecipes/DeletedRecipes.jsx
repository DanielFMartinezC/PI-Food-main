import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDeletedRecipes } from '../../Redux/actions';
import Loading from "../Loading/Loading";
import CardDeletedRecipe from "./CardDeletedRecipe";
import axios from "axios";
import { RECIPES } from "../../constants";
import s from './CSS/DeletedRecipes.module.css'

export default function DeletedRecipes() {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(null);
    const [refresh, setRefresh] = React.useState(0);

    React.useEffect(() => {
        function fn() {
            dispatch(getDeletedRecipes())
        }
        fn();
        function load() {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        };
        // load()
    }, [refresh]);
    function restoreRecipe(id) {
        axios.put(`${RECIPES}/${id}`)
            .then(response => alert(response.data))
            .then(() => setRefresh(refresh + 1))
    }
    const { deletedRecipes } = useSelector((state) => state) || false;

    if (deletedRecipes) {
        if (loading) {
            return (
                <Loading />
            )
        } else {
            if (deletedRecipes.length) {
                return (
                    <div className={ deletedRecipes.length <= 2 ? s.root : s.root2}>
                        <div className={s.divH}>
                            <h1 className={s.h}>Deleted recipes</h1>
                        </div>
                        <div className={s.divList}>
                            {
                                deletedRecipes.map(x => {
                                    return <div key={x.id} className={s.divCard}> <div><CardDeletedRecipe id={x.id} title={x.title} image={x.image} /> </div> <div>
                                        <button onClick={() => restoreRecipe(x.id)}>Restore</button>
                                    </div></div>
                                })
                            }
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className={s.root}>
                        <h1 className={s.h}>There are not deleted recipes</h1>
                    </div>
                )
            }
        }

    } else {
        return (
            <Loading />
        )
    }
}