import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../service/service'

function Detail() {
    const [state, setState] = useState({})

    let id = useParams()

    useEffect(() => {
        getProducts.getProductById(id).then(response => console.log(response))
    }, [])

    return (
        <div className='row'>
            <div className="col-4">

            </div>
        </div>
    )
}

export default Detail
