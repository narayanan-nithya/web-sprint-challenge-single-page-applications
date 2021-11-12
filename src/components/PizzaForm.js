import React from 'react';
import { Link } from 'react-router-dom'

export default function PizzaForm(props) {

    const {
        change,
        values,
        submit,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type} = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        const radioValue = type === 'radio' ? checked : value;
        change(name, realValue, radioValue)
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
                    value={values.name}
                    name="name"
                    id = "name-input"
                    type="text"
                    maxLength="15"
                    onChange={onChange} />

            </label>
            <label>Size
               <select
                    value={values.size}
                    id = "size-dropdown"
                    name='size'
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
                checked={values.sauce === 'red'} />
               
            </label>
            <label>White Sauce
                <input
                type='radio'
                name='sauce'
                value='white'
                onChange={onChange}
                checked={values.sauce === 'white'} />
               
            </label>
     
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
            <label>Olives
            <input
                type='checkbox'
                name='olives'
                onChange={onChange}
                checked={values.olives}
            />
            </label>
            <label>Capers
            <input
                type='checkbox'
                name='capers'
                onChange={onChange}
                checked={values.capers}
            />
            </label>
            <label>Onions
            <input
                type='checkbox'
                name='onions'
                onChange={onChange}
                checked={values.onions}
            />
            </label>
            <label>Bell Peppers
            <input
                type='checkbox'
                name='bellpeppers'
                onChange={onChange}
                checked={values.bellpeppers}
            />
            </label>
            <label>Special Instructions
               <input 
                    id = "special-text"
                    name="special"
                    type="text"
                    maxLength="300"
                    value={values.special}
                    onChange={onChange} />

            </label>
            <Link id= "order-details" to="/order">
            <button name="submit" id="order-button" type="submit">Add To Order</button>
            </Link>
        
        </form>

    )

}