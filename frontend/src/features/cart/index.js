import React from 'react';
import { connect } from 'react-redux';

export const cartItemsWithQuantity = (cartItems) => {
  console.log("cartItemsWithQuantity called")
  return cartItems.reduce((acc, item) => {
    // what's goin on with the filter?
    // looks like it's checking to see if the id has been aggregated yet
    const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
    filteredItem !== undefined
      ? filteredItem.quantity++
      : acc.push({ ...item, quantity: 1, })
    return acc
  }, [])
}

// export default cartItemsWithQuantity;