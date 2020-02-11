import React from 'react';
import ProductDescription from './ProductDescription';
import ProductContent from './ProductContent';
export default function MainContentFunc(props) {
  return (
    <div className="container">
      <div className="list-blog">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
          facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
        qui.</p>
      </div>
      <div id="app">
          <div className="cart">Giỏ hàng (0)</div>
          <div className="product">
            <ProductContent {...props} />
          </div >
          <ProductDescription {...props}/>
        </div>
    </div>
  )
}