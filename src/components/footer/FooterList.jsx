import React from 'react'
import { Link } from 'react-router-dom'

function FooterList(props) {
    return (
        <div className='px-4'>
            <div className='mx-3 mt-3'>
                <h5 className='title px-2'>{props.title}</h5>
            </div>
            <ul>
                <li className='lines'><Link to={props.link1}>{props.line1}</Link></li>
                <li className='lines'><Link to={props.link2}>{props.line2}</Link></li>
                <li className='lines'><Link to={props.link3}>{props.line3}</Link></li>

            </ul>
        </div>
    )
}

export default FooterList
