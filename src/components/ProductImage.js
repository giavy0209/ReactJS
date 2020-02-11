import React from 'react';

function ProductImage(props) {
  return (
    <div className="product-image">
      <div className="image"><img src={props.variationsImageURL} alt="" /></div>
    </div>
  )
}
export default ProductImage;