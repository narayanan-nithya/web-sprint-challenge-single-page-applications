import React from 'react';
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
        <form id="order-pizza" onSubmit={onSubmit}>
            <div className='form-group submit'>
                    <h2>Start Your Order</h2>

                    <div className='errors'>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.special}</div>
                    </div>
            </div>
            <label>Name
               <input 
                    id = "name-input"
                    name="name"
                    type="text"
                    maxLength="15"
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
            <label>Special Instructions
               <input 
                    id = "name-input"
                    name="name"
                    type="text"
                    maxLength="300"
                    value={formValues.special}
                    onChange={onChange} />

            </label>
            <Link id ="pizza-orders" to="/order">
                <button name="submit" type="submit" disabled={disabled}>Place Order</button>
            </Link>
        
        </form>

    )

}