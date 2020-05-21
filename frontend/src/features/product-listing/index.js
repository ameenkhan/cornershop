import React from 'react';
import ProductListItem from './Product-List-Item';
import { connect } from 'react-redux';
import { cartItemsWithQuantity } from '../cart';

// need to connect this to the redux store

function ProductListing(props) {
  // expecting a prop with a .products property
  return <div>
      {
        props.products.map( product => 
          <ProductListItem 
            product={product} 
            addToCart={props.addToCart}
            cart={cartItemsWithQuantity(props.cart)}
          />)
      }
    </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

// so how is connect getting addToCart the dispatch function to the prop
// addToCart={props.addToCart} this function is now passed down to the product-list-item itself!

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);