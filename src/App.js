import React, {useState, useEffect} from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import * as yup from 'yup';
import axios from "axios";
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";


const initialFormValues ={
  name: "",
  size: "",
  sauce: "",
  toppings: {
    olives:false,
    capers:false,
    onions:false,
    bellpeppers:false,
  },
  special: "",
};

const initialOrders =[];
const initialDisabled =true;

const App = () => {

  const[orders, setOrders]= useState(initialOrders)
  const[formValues, setFormValues] = useState(initialFormValues)
  const[formErrors, setFormErrors] =useState("")
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
       .then(res => {
         console.log(res)
        setOrders(res.data);
        })
       .catch(err => console.error(err))
  }
  const postPizzaOrder = newOrder => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) =>{
    yup
        .reach(schema, name).validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping],
      ),
      special: formValues.special,
    };
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postPizzaOrder(newOrder);
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])
  
  return (
    <div className='container'>
      <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pizza">
                  <PizzaForm
                      values={formValues}
                      change={inputChange}
                      submit={formSubmit}
                      disabled={disabled}
                      errors={formErrors} />
            </Route>

      </Switch>
    </div>
  )
}
export default App;
