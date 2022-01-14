import React, { useEffect, useState } from 'react'
import ProductList from '../products/ProductList'
import { getProducts } from '../service/service'


function Home() {

    const [state, setState] = useState({products: []})

    useEffect(() => {
        getProducts.getAllProducts().then(response => setState({products: response.data}))
    }, [])
    
    if (!state) {
        return (
            <h4 className='py-5 my-5'>Loading ...</h4>
        )
    }

    return (
        <div className='my-5 pt-4'>
            <ProductList products={state.products} />
        </div>
    )
    
}

export default Home;
