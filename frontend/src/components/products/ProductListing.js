import React from 'react';
import ProductItem from './ProductItem';

const ProductListing = (props) => (
  <>
    <h1>ProductListing Component</h1>
    {props.products.map((product, key) => (
      <ProductItem item={product} key={key}/>
    ))}
  </>
)

export default ProductListing;