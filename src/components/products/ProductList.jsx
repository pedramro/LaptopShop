import React from 'react'
import Product from './Product'

function ProductList({products}) {
    return (
        <div className="row">
            {
                products.map((product, index) => <div style={{position: 'relative'}} className='col-lg-4 col-md-6' key={index + 1}>
                    <Product product={product} />
                </div>)
            }
        </div>
    )
}

export default ProductList
