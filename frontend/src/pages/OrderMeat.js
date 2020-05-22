import React from 'react';
import ProductListing from '../components/products/ProductListing';
import data from '../data/products.json'

const OrderMeat = () => (
  <>
    <h1>Order Meat online portal thingy</h1>
    <ProductListing props={data.products}/>
  </>
)

export default OrderMeat;