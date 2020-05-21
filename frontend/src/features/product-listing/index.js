import React from 'react';
import ProductListItem from './Product-List-Item';

function ProductListing(props) {
  return <div>
      {
        props.products.map( product => 
          <ProductListItem product={product} />)
      }
    </div>
}

export default ProductListing;