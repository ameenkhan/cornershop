import React from 'react';
import ProductListing from '../features/product-listing'; // grabs index.js
import data from '../data/products.json';

const OrderMeat = () => (
    <>
        <h1>Order Meat online portal thingy</h1>
        <ProductListing products={data.products} />
    </>
)

export default OrderMeat;