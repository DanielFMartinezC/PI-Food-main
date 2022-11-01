import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDeletedRecipes } from '../../Redux/actions';
import Loading from "../Loading/Loading";
import CardDeletedRecipe from "./CardDeletedRecipe";
import axios from "axios";
import { RECIPES } from "../../constants";

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
        load()
    }, [refresh]);
    function restoreRecipe(id) {
        axios.put(`${RECIPES}/${id}`)
            .then(response => alert(response.data))
            .then(() => setRefresh(refresh + 1))
    }
    const { deletedRecipes } = useSelector((state) => state) || false;
    console.log(deletedRecipes)

    if (deletedRecipes) {
        if (loading) {
            return (
                <Loading />
            )
        } else {
            if (deletedRecipes.length) {
                return (
                    <div>
                        {
                            deletedRecipes.map(x => {
                                return <div key={x.id}> <div><CardDeletedRecipe id={x.id} title={x.title} image={x.image} /> </div> <div>
                                    <button onClick={() => restoreRecipe(x.id)}>Restore</button>
                                </div></div>
                            })
                        }
                    </div>
                )
            } else {
                return (
                    <h2>There are not deleted recipes</h2>
                )
            }
        }

    } else {
        return (
            <Loading />
        )
    }
}