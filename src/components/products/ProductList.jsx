import React, { useEffect, useState } from 'react'
import Product from './Product'

function ProductList({products}) {

    

    return (
        <div>
            <Product products={products} />
        </div>
    )
}

export default ProductList
