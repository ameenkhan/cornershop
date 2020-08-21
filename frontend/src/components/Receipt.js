import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Receipt = () => {
  const cart = useSelector( (state) => state.cart )
  const dispatch = useDispatch()
  
  return <>
    <h1>Receipt</h1>
    <h2>name, id, price</h2>
    {cart.map(item => {
      return <li>{item.name}, {item.id}, {item.price}</li>
    })}
    <button
      onClick={( () => dispatch({type: "RESET"}))}
    >
      Clear
    </button>
    <button>
      Place Order
    </button>
  </>
}

export default Receipt;