import React, {useState} from 'react';
import ProductImage from './ProductImage';

export default function ProductContent(props) {
  let { title, brand, variations } = props;
  let [selectedIndex,setIndex] = useState(0)
  let selectedVariant = variations[selectedIndex];
  function getClassActive(id) {
    if (id == selectedVariant.variationsID) return 'active';
    return '';
  }

  return (
    <>
    <ProductImage {...selectedVariant}/>
    <div className="product-content">
      <h3 className="title"><a>{title}</a></h3>
      <p className="brand">Thương hiệu: {brand ? brand : 'No Brand'}</p>
      <p className="quantity">Còn lại: { selectedVariant.variationsQuantity } Sản phẩm</p>
      <div className="wrapper-price">
      <div className="final-price">{ selectedVariant.variationsPrice*(1 - selectedVariant.variationsPercent) }&nbsp;₫</div>
      <div className="origin-price">{selectedVariant.variationsPrice}&nbsp;₫</div>
        <div className="sale-price">-{selectedVariant.variationsPercent*100}%</div>
      </div>
      <div className="wrapper-color">
        <div className="text">Màu sắc</div>
        <div className="list-color">
          <p className="color-text">{selectedVariant.variationsName}</p>
          <ul>
            {
              variations.map((variant,index) => {
                return <li
                  onClick = {()=>setIndex(index)}
                  className={getClassActive(variant.variationsID)}
                  key={variant.variationsID}>
                  <img src={variant.variationsImageURL} alt={variant.variationsName} />
                </li>
              })
            }
            {/* <li className=""><img src="./images/red.jpg" alt="Màu Đỏ" /></li>
            <li className="active"><img src="./images/blue.jpg" alt="Màu Xanh" /></li>
            <li className=""><img src="./images/black.jpg" alt="Màu Đen" /></li> */}
          </ul>
        </div>
      </div> <button className="add-to-cart">Add to cart</button>
    </div>
    </>
  )
}
