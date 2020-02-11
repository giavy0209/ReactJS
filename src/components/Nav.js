import React from 'react';

export default function Nav(props){
    const {categories} = props
    return (
        <nav>
            <ul>
                {
                categories.map((variant,index) => {
                    return <li
                    key={variant._id}>
                        {variant.title}
                    </li>
                })
                }
            </ul>
        </nav>
    )
}