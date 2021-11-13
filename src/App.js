import React, {useState, useEffect} from "react";
import {Switch, Route } from "react-router-dom";
import "./App.css";
import * as yup from 'yup';
import axios from "axios";
import schema from "./validation/formSchema";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";
import Order from "./components/Order";
import styled from 'styled-components'


//creating Styling Div
const Div = styled.div`
  display: flex;
  justify-content: center;
  padding:12%;
  margin-top: 0px;
  `;


//setting intial form values
const initialFormValues ={
  name: "",
  size: "",
  sauce: "",
  toppings: {
    olives:false,
    capers:false,
    onions:false,
    garlic:false,
  },
  special: "",
};

//setting initial orders array
const initialOrders =[];
const initialDisabled =true;

const App = () => {

  const[orders, setOrders]= useState(initialOrders)
  const[formValues, setFormValues] = useState(initialFormValues)
  const[formErrors, setFormErrors] =useState("")
  const [disabled, setDisabled] = useState(initialDisabled)

  //get current orders
  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
       .then(res => {
         console.log(res)
        setOrders(res.data);
        })
       .catch(err => console.error(err))
  } 
  
  const postPizzaOrder = newOrder => {
    //ADD newly created order TO STATE
    //     to 'https://reqres.in/api/orders'
    //    and reset form.
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders( [res.data, ...orders] );
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }
  //validate form errors
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }
//form submission event handler
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['olives', 'capers', 'onions', 'garlic'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim(),
    };
    // Posting new pizza order
    postPizzaOrder(newOrder);
  }

 useEffect(() => {
    getOrders()
  }, [])
  
  //updated disabled every time form values change.
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])
  
  return (
    <Div>
      <Switch>{/*setting exact path for homepage*/}
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pizza">{/*path route for /pizza*/}
                  <PizzaForm
                      values={formValues}
                      change={inputChange}
                      submit={formSubmit}
                      disabled={disabled}
                      errors={formErrors} />
            </Route>
            <Route path="/order"> {/*path route for orders*/}
             <Order details={orders} />
            </Route>
      </Switch>

  </Div>
  )
}
export default App;
