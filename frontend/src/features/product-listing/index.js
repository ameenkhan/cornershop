import React from 'react';
import ProductListItem from './Product-List-Item';
import { connect } from 'react-redux';

// need to connect this to the redux store

function ProductListing(props) {
  // expecting a prop with a .products property
  return <div>
      {
        props.products.map( product => 
          <ProductListItem product={product} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);