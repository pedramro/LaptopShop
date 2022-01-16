import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../service/service'
import { store } from '../../index'
import { addToCart } from '../actions'
import Comments from '../comments/Commnets'

function Detail() {
    const [state, setState] = useState({product: {}})
    const [refresh, setRefresh] = useState({ref: 0})

    function refreshPage(num) {
        setRefresh({ref: refresh.ref + num})
    }

    const { id } = useParams()

    useEffect(() => {
        getProducts.getProductById(id).then(response => setState({product: response.data}));
        const unsubscribe = store.subscribe(() => console.log(store.getState()));
        return () => {
            unsubscribe()
        }
    }, [])

    const { product } = state

    function addItemToCart(){
        store.dispatch(addToCart(product))
    }

    return (
        <div>
        <div className='row mt-5 pt-5'>
            <div className="col-6">
                <img width='100%' src={product.pic} title={product.title} alt={product.title} />
            </div>
            <div className="col-6">
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
                <h5>Price: {product.price}</h5>
                <button onClick={addItemToCart} className='btn btn-primary mt-2'>Add to Cart</button>
            </div>
        </div>
        <h4 className='text-center mt-5 pt-5'>Reviews</h4>
        <hr className='mb-5' />
        <Comments comments={product.comments} id={id} refresh={refreshPage} />
        </div>
    )
}

export default Detail
