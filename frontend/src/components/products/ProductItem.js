import React from 'react';

const ProductItem = (props) => {
  return <>
    <h1>{ props.item.name }</h1>
    <h1>{ props.item.price }</h1>
    <h1>{ props.item.description }</h1>
    <img
      height={100}
      title={ props.item.name }
      src={`/products/${props.item.image}`}
    />
  </>
}

export default ProductItem;