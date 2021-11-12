import React from 'react'
import "./Nav"
import{ Link } from 'react-router-dom';

export default function PizzaForm(props) {

    const {
        inputChange,
        formValues,
        formSubmit,
        disabled, 
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }
    
    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type} = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue)
    }
    
    return(
        <form className="form container" onSubmit={onSubmit}>
            <label>Name
               <input 
                    id = "name-input"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={onChange} />

            </label>
            <label>Size
               <select
                    id = "size-input"
                    name="size"
                    value={formValues.size}
                    onChange={onChange} >
                    <option value="">Select Desired Pizza Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            
            <label>Red Sauce
                <input
                type='radio'
                name='sauce'
                value='red'
                onChange={onChange}
                checked={formValues.sauce === 'red'} />
               
            </label>
            <label>White Sauce
                <input
                type='radio'
                name='sauce'
                value='white'
                onChange={onChange}
                checked={formValues.sauce === 'white'} />
               
            </label>
     
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
            <label>Olives
            <input
                type='checkbox'
                name='olives'
                onChange={onChange}
                checked={formValues.toppings.olives === true}
            />
            </label>
            <label>Capers
            <input
                type='checkbox'
                name='capers'
                onChange={onChange}
                checked={formValues.toppings.capers === true}
            />
            </label>
            <label>Onions
            <input
                type='checkbox'
                name='onions'
                onChange={onChange}
                checked={formValues.toppings.onions === true}
            />
            </label>
            <label>Bell Peppers
            <input
                type='checkbox'
                name='bellpeppers'
                onChange={onChange}
                checked={formValues.toppings.bellpeppers === true}
            />
            </label>

        
        </form>

    )

}