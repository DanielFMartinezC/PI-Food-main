import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputDiets from '../HomPage/Filters/InputDiets';
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
    const [errors, setErrors] = React.useState({ initialState: true });

    function validateRecipe(input) {
        let error = {};

        if (input.healthScore > 100) {
            error.healthScore = 'Health score must be 100 or less'
        } else if (input.healthScore < 0) {
            error.healthScore = 'Health score must be 0 or greater'
        } else {
            error.healthScore = ''
        };

        const validateRUL = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
        if (input.image !== '') {
            if (!validateRUL.test(input.image)) {
                error.image = 'You must type a URL'
            }
        } else {
            error.image = ''
        };


        if (!input.name) {
            error.name = 'Name is required'
        } else {
            error.name = ''
        }

        if (!input.summary) {
            error.summary = 'Summar is required'
        } else {
            error.summary = ''
        }

        return error
    };

    function validateDiets(input) {
        let error = {}
        if (!input.length) {
            error.diets = 'You must select at least one diet'
        } else {
            error.diets = ''
        };
        return error
    };

    function validateSteps(input) {
        let error = ''
    
        if (input.length > 1) {
            
            for (let i = 0; i < input.length; i++) {
              
                if (!input[i]["step"]) {
                    error = 'All steps fields must be filled';
                    return error
                }
            };

            return error
        }
    }

    const handleRecipe = function (e) {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            initialState: false,
            ...validateRecipe({
                ...recipe,
                [e.target.name]: e.target.value,
            })
        });
    };

    function addStep(e) {
        e.preventDefault();
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, { ...stepsModel }]
        });
        setErrors({
            ...errors,
            steps: validateSteps([...recipe.steps, { ...stepsModel }])
        });
    };
    function removeStep(e, index) {
        e.preventDefault();
        const steps = [...recipe.steps];
        steps.splice(index, 1);
        setRecipe({
            ...recipe,
            steps: steps
        });
        setErrors({
            ...errors,
            steps: validateSteps([...steps])
        });
    }
    function handleStepsChange(e) {

        const steps = [...recipe.steps];
        steps[e.target.id]["step"] = e.target.value;
        steps[e.target.id]["number"] = e.target.dataset.number;

        setRecipe({
            ...recipe,
            steps: steps
        });

        setErrors({
            ...errors,
            steps: validateSteps(steps)
        });
    };
    function handleDiets(e) {
        if (e.target.checked) {
            setDiets(dietFilter => [...dietFilter, e.target.value]);
            setErrors(validateDiets([...dietsReact, e.target.value]))
        }
        if (!e.target.checked) {
            setDiets(dietFilter => [...dietFilter].filter(x => x !== e.target.value));
            setErrors(validateDiets([...dietsReact].filter(x => x !== e.target.value)))
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
    }, [errors, dietsReact, recipe])

    function handleSubmit(e) {
        e.preventDefault();
        if(errors.initialState){
            setErrors({
                ...errors,
                beforeSubmit: 'You must complete the form before you submit'
            })
        }else{
            setErrors({
                ...errors,
                beforeSubmit: ''
            })
        }
        if (submit.current) {
            const body = {
                recipe: recipe,
                diets: dietsReact
            }
            dispatch(createRecipe(body))
        }
    }

    return (
        <div>
            <h2>Here you can create your own recipe</h2>
            <form onSubmit={(e) => { handleSubmit(e) }}>
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
                <input type="submit" disabled={!submit} />
            </form>
            <div>
                <form onChange={(e) => { handleDiets(e) }}>
                    {
                        diets ? diets.map(x => {
                            return <InputDiets key={x.id} value={x.name} />
                        }) : <p>pere</p>
                    }
                    {
                        errors.diets ? <span>{errors.diets}</span> : null
                    }
                </form>
            </div>
            {
                errors.beforeSubmit ? <p>{errors.beforeSubmit}</p> : null
            }
        </div>
    )
};

