import React from 'react';
import ProductListing from '../components/products/ProductListing';
import data from '../data/products.json'

const OrderMeat = () => {
  return <>
    <h1>Order Meat online portal thingy</h1>
    <ProductListing products={data.products}/>
  </>
}

export default OrderMeat;