import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ProductItem = (props) => {
  const counter = useSelector( (state) => state.cart )
  const dispatch = useDispatch()
  return <>
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
  </>
}

export default ProductItem;