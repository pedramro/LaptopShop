import React from 'react'
import {Link} from 'react-router-dom'
import './product.css'

function Product({product}) {

    

    return (
            <div style={{height: 550}} className="shadow card card-body mt-3">
                <img height={300} src={product.pic} className="card-img-top" />
                <div className='d-flex flex-column align-content-between mt-5'>
                    <h5 className="title-lines card-title my-2">{product.title}</h5>
                    <p className="desc-lines card-text">{product.desc}</p>
                    <Link to={'detail/' + product.id} className="btn-products btn btn-primary">Show More</Link>
                </div>
            </div>
    )
}

export default Product;
