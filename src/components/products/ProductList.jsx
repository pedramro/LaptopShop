import React, { useEffect, useState } from 'react'
import Product from './Product'


function ProductList({products}) {

    
    return (
        <div className="row">
            {
                products.map((product, index) => <div className='col-4' key={index}>
                <Product product={product} />
                </div>)
            }
        </div>
    )
}

export default ProductList
