import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation(){
    return (
    <div>
        <h1> Lambda Eats </h1>
        <nav>
            <Link to="/">Home </Link>
            
        </nav>
        <h2>Hungry?</h2>
        <nav>
        <Link id="order-pizza" to="/pizza">Start Here</Link>
        </nav>
    </div>
        
    );
}