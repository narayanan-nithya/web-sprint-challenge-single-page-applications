import React from 'react'
import Home from './Home'

function Order({ details }) {
  if (!details) {
    return <h3>Fetching your Order details...</h3>
  }

  return (
    <div className='order container'>
      <h2>Name: {details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Special Instructions: {details.special}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
          </ul>
        </div>
      }
      <Home />
      
    </div>
  )
}
export default Order
