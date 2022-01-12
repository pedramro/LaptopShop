import React from 'react'
import {Link} from 'react-router-dom'
import './product.css'

function Product({product}) {
    return (
            <div className="card card-body mt-3">
                <img src={product.pic} className="card-img-top" />
                <div>
                    <h5 className="card-title my-2">{product.title}</h5>
                    <p className="desc-lines card-text">{product.desc}</p>
                    <Link to={'detail/' + product.id} className="btn btn-primary">Show More</Link>
                </div>
            </div>
    )
}

export default Product;
