import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductList from '../products/ProductList'
import { getProducts } from '../service/service'


function Home() {

    const [state, setState] = useState({products: []})
    const location = useLocation()

    useEffect(() => {
        getProducts.getAllProducts(location.search).then(response => setState({products: response.data}))
    }, [location])
    
    
    if (!state.products.length && location.search) {
        return (
            <div style={{height: '100vh'}} className='d-flex align-items-center justify-content-center'>
                <h3 className='text-center'>No Product Finded</h3>
            </div>
        )
    } else if (!state.products.length) {
        return (
            <div style={{height: '100vh'}} className='d-flex align-items-center justify-content-center'>
                <h3 className='text-center'>Loading ...</h3>
            </div>
        )
    }

    return (
        <div className='my-5 pt-4'>
            <ProductList products={state.products} />
        </div>
    )
    
}

export default Home;
