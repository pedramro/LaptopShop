import React from 'react'
import { CartList } from '../cart'
import { useSelector } from 'react-redux'

function CartPage() {

    const cartItems = useSelector(state => state.cart)

    if (!cartItems.length){
        return (
        <div className='mt-5 pt-5' style={{height: '100vh'}}>
            <h1 className='display-5 text-center'>Cart is Empty</h1>
        </div>
    )}

    return (
        <div style={{height: '100vh'}}>
            <table style={{marginTop: 80}} className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope='col'>Total Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
            <tbody>
                {cartItems.map((item, index) => <CartList item={item} key={index} index={index} />)}
            </tbody>
            </table>
        </div>  
    )
}

export default CartPage
