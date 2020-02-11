import React from 'react'

export default function Product(props){
    const {category, listProduct} = props
    console.log(listProduct)
    return(
        listProduct.map(product=>{
            if(product.categoryID == category._id) {
                return <div className="item">
                    <div><img src={product.variations[0].variationsImageURL} alt="1" /></div>
                        <h2>{product.title}</h2>
                </div>
            }
        })
    )
}