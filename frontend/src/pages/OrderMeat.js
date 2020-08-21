import React from 'react';
import ProductListing from '../components/products/ProductListing';
import data from '../data/products.json'
import Receipt from '../components/Receipt';

const OrderMeat = () => {
  return <>
    <h1>Order Meat online portal thingy</h1>
    <ProductListing products={data.products}/>
    <Receipt />
  </>
}

export default OrderMeat;