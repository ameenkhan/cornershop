import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ProductItem = (props) => {
  const counter = useSelector( (state) => state.cart )
  const dispatch = useDispatch()
  return <>
    { console.log(props.item) }
    <h1>{ props.item.name }</h1>
    <h1>{ props.item.price }</h1>
    <h1>{ props.item.description }</h1>
    <img
      height={100}
      title={ props.item.name }
      src={`/products/${props.item.image}`}
    />
    <button
      onClick={( () => dispatch({type: "ADD", payload: props.item}) )}
    >
      Add to cart
    </button>
    <button
      onClick={( () => dispatch({type: "REMOVE_ONE", payload: props.item}))}
    >
      Remove One
    </button>
    <button
      onClick={( () => dispatch({type: "REMOVE_ALL", payload: props.item}))}
    >
      Remove All
    </button>
    <p>In Cart: { counter.filter(item => item.id == props.item.id).length }</p>
  </>
}

export default ProductItem;