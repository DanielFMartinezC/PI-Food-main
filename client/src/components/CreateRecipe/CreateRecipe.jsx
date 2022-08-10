import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputDiets from '../Filters/InputDiets';
import { getDiets, createRecipe } from "../../Redux/actions";

export default function CreateRecipe() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getDiets())
    }, []);

    const { diets } = useSelector((state) => state) || false;

    const stepsModel = {
        number: 0,
        step: ''
    }
    const [recipe, setRecipe] = React.useState({
        name: "",
        summary: '',
        healthScore: 0,
        steps: [{ ...stepsModel }],
        image: ''
    });

    const [dietsReact, setDiets] = React.useState([]);
    const [errors, setErrors] = React.useState({});
    const handleRecipe = function (e) {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
        // setErrors(validate({
        //   ...recipe,
        //   [e.target.name]: e.target.value
        // }))
    };
    function addStep(e) {
        e.preventDefault();
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, { ...stepsModel }]
        })
    };
    function removeStep(e, index) {
        e.preventDefault();
        const steps = [...recipe.steps];
        steps.splice(index, 1);
        setRecipe({
            ...recipe,
            steps: steps
        })
    }
    function handleStepsChange(e) {
        const steps = [...recipe.steps];
        steps[e.target.id]["step"] = e.target.value;
        steps[e.target.id]["number"] = e.target.dataset.number;
        setRecipe({
            ...recipe,
            steps: steps
        })
    };
    function handleDiets(e) {
        if (e.target.checked) {
            setDiets(dietFilter => [...dietFilter, e.target.value]);
        }
        if (!e.target.checked) {
            setDiets(dietFilter => [...dietFilter].filter(x => x !== e.target.value));
        };
    };

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            recipe: recipe,
            diets: dietsReact
        }
        console.log(body)
        dispatch(createRecipe(body))
    }


    return (
        <div>
            <form onChange={(e) => { handleDiets(e) }} onSubmit={(e) => { handleSubmit(e) }}>
                <label>name: </label>
                <input type='text' name="name" value={recipe.name} onChange={(e) => handleRecipe(e)} />
                <label>Summary: </label>
                <input type='text' name="summary" value={recipe.summary} onChange={(e) => handleRecipe(e)} />
                <label>Health score: </label>
                <input type="number" name="healthScore" value={recipe.healthScore} onChange={(e) => handleRecipe(e)} />
                <label>Image URL: </label>
                <input type='text' name='image' value={recipe.image} onChange={(e) => handleRecipe(e)} />
                {
                    recipe.steps.map((x, i) => {
                        return (
                            <div key={i}>
                                <label>Step {i + 1}: </label>
                                <input type="text" name={`step ${i + 1}`} id={i} data-number={i + 1} value={x.step} onChange={(e) => { handleStepsChange(e) }} />
                                {
                                    recipe.steps.length > 1 ? <button onClick={(e) => { removeStep(e, i) }}>Remove</button> : null
                                }
                            </div>
                        )
                    })
                }
                <button onClick={(e) => { addStep(e) }}>Add</button>
                {
                    diets ? diets.map(x => {
                        return <InputDiets key={x.id} value={x.name} />
                    }) : <p>pere</p>
                }
                <input type="submit" />
            </form>
        </div>
    )
}