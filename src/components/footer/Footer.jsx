import React from 'react'
import './Footer.css'
import FooterList from './FooterList'
import Subscribe from './Subscribe'

function Footer() {
    return (
        <footer className='footer-wrapper row w-100' style={{marginLeft: 0}}>
            <div className='col-lg-3 h-100 d-flex align-items-center justify-content-center'>
                <h3 className='text-warning'>Lap Shop</h3>
            </div>
            <div className='col-lg-6 d-flex text-white align-items-center justify-content-center'>
                <FooterList title='Pages' line1='Contact' line2='Products' line3='Cart' link1='/contact' link2='/' link3='/cart' />
                <FooterList title='About' line1='About' line2='Products' line3='Desinger' link1='/about' link2='/' link3='/contact' />
            </div>
            <div className='col-lg-3 h-100 text-white d-flex justify-content-center align-items-center flex-column'>
                <Subscribe />
            </div>
        </footer>
    )
}

export default Footer
