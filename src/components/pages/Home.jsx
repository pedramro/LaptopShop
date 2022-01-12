import React, { useEffect, useState } from 'react'
import ProductList from '../products/ProductList'
import { getProducts } from '../service/service'


function Home() {

    const [state, setState] = useState({products: []})

    useEffect(() => {
        getProducts.getAllProducts().then(response => setState({products: response.data}))
    }, [])
    

    return (
        <div className='mt-5'>
            <ProductList products={state.products} />
        </div>
    )
    
}

export default Home;
