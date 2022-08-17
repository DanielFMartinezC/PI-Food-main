import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputDiets from '../HomPage/Filters/InputDiets';
import { getDiets } from "../../Redux/actions";
import { RECIPES } from "../../constants";
import axios from "axios";
import s from './CreateRecipe.module.css'

export default function CreateRecipe() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getDiets())
    });

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
        if (!input.title) {
            error.name = 'Name is required'
        } else {
            error.name = ''
        };
        if (input.healthScore > 100) {
            error.healthScore = 'Health score must be 100 or less'
        } else if (input.healthScore < 0) {
            error.healthScore = 'Health score must be 0 or greater'
        } else {
            error.healthScore = ''
        };

        const validateRUL = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/);
        if (input.image !== '') {
            if (!validateRUL.test(input.image)) {
                error.image = 'You must type a URL'
            }
        } else {
            error.image = ''
        };
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
            setErrors({
                ...errors,
                ...validateDiets([...dietsReact, e.target.value])
            })
        }
        if (!e.target.checked) {
            setDiets(dietFilter => [...dietFilter].filter(x => x !== e.target.value));
            setErrors({
                ...errors,
                ...validateDiets([...dietsReact].filter(x => x !== e.target.value))
            })
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
    }, [errors, dietsReact, recipe]);

    function showAlert(response) {
        alert(response)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (errors.initialState) {
            setErrors({
                ...errors,
                beforeSubmit: 'You must complete the form before you submit'
            })
        } else {
            setErrors({
                ...errors,
                beforeSubmit: ''
            })
        }
        if (submit.current) {
            const body = {
                recipe: recipe,
                diets: dietsReact
            };
            axios.post(RECIPES, body).then(response => showAlert(response.data))
        };
    }

    return (
        <div className={s.root}>
            <h2>Here you can create your own recipe</h2>
            <div className={s.div1}>
                <div className={s.divRecipes}>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div>
                            <label>name: </label>
                            <input type='text' name="title" value={recipe.title} onChange={(e) => handleRecipe(e)} />
                            {
                                errors.name ? <span className={s.danger}>{errors.name}</span> : null
                            }
                        </div>
                        <div>
                            <label>Health score: </label>
                            <input className={s.HS} type="number" name="healthScore" value={recipe.healthScore} onChange={(e) => handleRecipe(e)} />
                            {
                                errors.healthScore ? <span className={s.danger}>{errors.healthScore}</span> : null
                            }
                        </div>
                        <div>
                            <label>Image URL: </label>
                            <input type='text' name='image' value={recipe.image} onChange={(e) => handleRecipe(e)} />
                            {
                                errors.image ? <span className={s.danger}>{errors.image}</span> : null
                            }
                        </div>
                        <div className={s.summaryDiv}>
                            <label>Summary: </label>
                            <textarea className={s.summary} type='text' name="summary" value={recipe.summary} onChange={(e) => handleRecipe(e)} />
                            {
                                errors.summary ? <span className={s.danger}>{errors.summary}</span> : null
                            }
                        </div>

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
                            errors.steps ? <span className={s.danger}>{errors.steps}</span> : null
                        }
                        <div>
                            <button className={s.add} onClick={(e) => { addStep(e) }}>Add</button>
                        </div>
                        <div>
                            <button className={s.btnSub} type="submit" disabled={!submit}>Submit</button>
                            {
                                errors.beforeSubmit ? <span className={s.danger}>{errors.beforeSubmit}</span> : null
                            }
                        </div>
                    </form>
                </div>
                <div>
                    <form onChange={(e) => { handleDiets(e) }}>
                        <h4>Choose the diet type:</h4>
                        {
                            diets ? diets.map(x => {
                                return <InputDiets key={x.id} value={x.name} />
                            }) : <p>pere</p>
                        }
                        {
                            errors.diets ? <span className={s.danger}>{errors.diets}</span> : null
                        }
                    </form>
                </div>
            </div>
        </div>
    )
};

