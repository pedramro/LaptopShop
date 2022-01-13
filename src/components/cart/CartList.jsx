import React from 'react'


export function CartList({item, index}) {


    return (
        <>
                <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>$0</td>
                <td>$0</td>
                <td>
                    <button className='btn btn-danger'>Remove</button>
                </td>
                </tr>
        </>
    )
}

