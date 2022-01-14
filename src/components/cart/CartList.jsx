import React from 'react'
import { store } from '../../index'
import { removeFromCart } from '../actions'


export function CartList({item, index}) {
    
    let totalPrice = item.price.replace('$', '')
    totalPrice = totalPrice.replace(',', '')
    totalPrice = parseInt(totalPrice) * parseInt(item.quantity)

    function removeItem() {
        store.dispatch(removeFromCart(item.id))
    }

    return (
        <>
                <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>${totalPrice}</td>
                <td>{item.quantity}</td>
                <td>
                    <button onClick={removeItem} className='btn btn-danger'>Remove</button>
                </td>
                </tr>
        </>
    )
}

