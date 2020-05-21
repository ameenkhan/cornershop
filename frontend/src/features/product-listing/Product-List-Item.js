import React from 'react';
import Item from 'antd/lib/list/Item';

function ProductListItem(props) {
  // expecting a prop with name, image, description, and price properties

  // thisItemInCart is the accumulated val
  const thisItemInCart = props.cart.filter( item => item.id === props.product.id)[0]
  return <div>
    <h3>{ props.product.name }</h3>
    <img
      height={100}
      title={ props.product.name }
      src={`/products/${props.product.image}`}
    />
    <div>{ props.product.description }</div>
    <div>${ props.product.price }</div>
    <div>
      <button
        onClick={() => props.addToCart(props.product)}>
          Add to Cart ({
            (thisItemInCart && thisItemInCart.quantity) || 0
          })
        </button>
    </div>
  </div>
}


export default ProductListItem;