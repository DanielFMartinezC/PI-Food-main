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
        title: "",
        summary: '',
        healthScore: 0,
        steps: [{ ...stepsModel }],
        image: ''
    });

    const submit = React.useRef(null)
    const [dietsReact, setDiets] = React.useState([]);
    const [errors, setErrors] = React.useState({ initialState: 'mal' });

    function validate(e) {
        const { name, value } = e.target;
        console.log(name, typeof (value), Math.sign(value))
        let error = {}
        switch (name) {
            case "healthScore":

                if (value > 100) {
                    error.healthScore = 'Health score must be 100 or less'
                } else if (Math.sign(value) === -1) {
                    error.healthScore = 'Health score must be 0 or greater'
                } else {
                    error.healthScore = ''
                };
                break;
            case "image":
                const validateRUL = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
                if (value !== '') {
                    if (!validateRUL.test(value)) {
                        error.image = 'You must type a URL'
                    }
                }
                else {
                    error.image = ''
                };
                break;
            case "name":
                if (!recipe.name) {
                    error.name = 'Name is required'
                };
                break;
            case "summary":
                if (!recipe.summary) {
                    error.summary = 'Summar is required'
                };
                break;
        };

        if (!dietsReact.length) {
            error.diets = 'You must select at least one diet'
        };
        if (recipe.steps.length > 1) {
            for (let i = 0; i < recipe.steps.length; i++) {
                if (!recipe.steps[i]["step"]) {
                    error.steps = 'All steps fields must be filled'
                }
            }
        }

        return error
    }

    const handleRecipe = function (e) {
        setErrors({
            ...errors,
            initialState: ''
        })
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
        setErrors(validate(e));
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

    React.useEffect(() => {
        function errorToBoolean() {
            for (const key in errors) {
                if (errors[key]) {
                    return 0
                }
            }
            return 1
        };
        submit.current = errorToBoolean()
        console.log(errors)
        console.log(submit.current)
    }, [errors, dietsReact, recipe])

    function handleSubmit(e) {
        e.preventDefault();
        // if(!recipe.title){
        //     setErrors({name: 'Name is required'})
        // };
        handleRecipe(e)
        console.log(submit.current)
        if (submit.current) {
            const body = {
                recipe: recipe,
                diets: dietsReact
            }
            console.log(body)
            dispatch(createRecipe(body))
        }
    }

    return (
        <div>
            <h2>Here you can create your own recipe</h2>
            <form onChange={(e) => { handleDiets(e) }} onSubmit={(e) => { handleSubmit(e) }}>
                <label>name: </label>
                <input type='text' name="title" value={recipe.title} onChange={(e) => handleRecipe(e)} />
                {
                    errors.name ? <span>{errors.name}</span> : null
                }
                <label>Summary: </label>
                <input type='text' name="summary" value={recipe.summary} onChange={(e) => handleRecipe(e)} />
                {
                    errors.summary ? <span>{errors.summary}</span> : null
                }
                <label>Health score: </label>
                <input type="number" name="healthScore" value={recipe.healthScore} onChange={(e) => handleRecipe(e)} />
                {
                    errors.healthScore ? <span>{errors.healthScore}</span> : null
                }
                <label>Image URL: </label>
                <input type='text' name='image' value={recipe.image} onChange={(e) => handleRecipe(e)} />
                {
                    errors.image ? <span>{errors.image}</span> : null
                }
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
                {
                    errors.steps ? <span>{errors.steps}</span> : null
                }
                <button onClick={(e) => { addStep(e) }}>Add</button>
                {
                    diets ? diets.map(x => {
                        return <InputDiets key={x.id} value={x.name} />
                    }) : <p>pere</p>
                }
                {
                    errors.diets ? <span>{errors.diets}</span> : null
                }
                <input type="submit" />
            </form>
        </div>
    )
};

