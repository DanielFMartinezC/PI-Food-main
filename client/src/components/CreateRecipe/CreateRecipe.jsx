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

    const [dietsReact, setDiets] = React.useState([]);
    const [errors, setErrors] = React.useState({
        title: "",
        summary: '',
        healthScore: '',
        steps: '',
        image: '',
        diets: ''
    });

    function validateRecipe(e) {
        const { name, value } = e.target
        // console.log(name)
        switch (name) {
            case "healthScore":
                if (value < 0) {
                    return setErrors({
                        ...errors,
                        healthScore: 'Health score must be 0 or greater'
                    })
                }
                if (value > 100) {
                    return setErrors({
                        ...errors,
                        healthScore: 'Health score must be 100 or less'
                    })
                } else {
                    return setErrors({
                        ...errors,
                        healthScore: ''
                    })
                }
            case "image":
                const validateImage = new RegExp(/.(gif|jpeg|jpg|png)$/i);
                const validateRUL = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
                if (!value) {
                    return null
                }
                if (!validateRUL.test(value)) {
                    return setErrors({
                        ...errors,
                        image: 'You must type a URL'
                    })
                }
                if (!validateImage.test(value)) {
                    return setErrors({
                        ...errors,
                        image: 'URL must be from an image'
                    })
                }
                else {
                    return setErrors({
                        ...errors,
                        image: ''
                    })
                }
        }
    }

    function validateSubmit(){
        if(!recipe.name){
            setErrors({
                ...errors,
                name: 'Name is required'
            })
        }if(!recipe.summary){
            setErrors({
                ...errors,
                summary: 'Summary is required'
            })
        } if(!dietsReact.length){
            setErrors({
                ...errors,
                diets: 'You must select at least one diet'
            })
        }
        for(const key in errors){
            if(errors[key]){
                return false
            }
        };
        return true
    }

    const handleRecipe = function (e) {
        validateRecipe(e);
        if (!errors[e.target.name]) {
        };
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
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
        if(validateSubmit()){
            const body = {
                recipe: recipe,
                diets: dietsReact
            }
            console.log(body)
            dispatch(createRecipe(body))
        }else{

        }
    }
    // console.log(!errors['name'])
    // console.log(errors, 'errores');
    // console.log(recipe, 'recipe')
    return (
        <div>
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

