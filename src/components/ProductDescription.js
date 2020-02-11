import React from 'react';

export default function ProductDescription(props) {
  return (
    <div className="description">
      <ul className="extra-info">
        {
          props.attrProducts.map(Att=>{
            return <li key = { Att.attrProductsID }>{Att.attrProductsName}: {Att.attrProductsValue}</li>
          })
        }
      </ul>
    </div>
  )
}