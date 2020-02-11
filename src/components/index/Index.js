import React from 'react';
import Product from './product'
export default function Index(props){
    const {categories, listProduct} = props
    return(
        categories.map(category=>{
            const obj = {category, listProduct}
            return <div>
                <h1>{category.title}</h1>
                <Product {...obj} />
            </div>
        })
    )
}