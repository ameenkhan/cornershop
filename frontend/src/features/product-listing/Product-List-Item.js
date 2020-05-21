import React from 'react';
import Item from 'antd/lib/list/Item';

function ProductListItem(props) {
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
      <button>Add to Cart</button>
    </div>
  </div>
}


export default ProductListItem;