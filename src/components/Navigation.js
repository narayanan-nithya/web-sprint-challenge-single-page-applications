import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

//Navigation and /pizza route to order pizza.

export default function Navigation(){
    return (
        <div className="nav-container">
            <nav>
                <h1>Lambda Eats</h1>
                <Link to="/">Home </Link>
            </nav>
            <h2>Hungry?</h2>
            <nav>
            <Link id="order-pizza" to="/pizza">
            <h2>Start Here</h2>
            </Link>
            </nav>
        </div>
    );
}