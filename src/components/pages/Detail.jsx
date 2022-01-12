import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../service/service'

function Detail() {
    const [state, setState] = useState({product: {}})

    const { id } = useParams()

    useEffect(() => {
        getProducts.getProductById(id).then(response => setState({product: response.data}))
    }, [])

    const { product } = state

    return (
        <div className='row mt-5'>
            <div className="col-6">
                <img width='100%' src={product.pic} title={product.title} />
            </div>
            <div className="col-6">
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Detail
