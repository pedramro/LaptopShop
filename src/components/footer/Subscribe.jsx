import React from 'react'

function Subscribe() {
    const pattern = /^[a-zA-Z0-9.@]{12,64}$/;
    function subscribe(){
        let massage = document.getElementById('massage')
        let inputValue = document.getElementById('email').value
        if (inputValue && pattern.test(inputValue)) {
            massage.classList.add('text-success')
            massage.textContent = 'All discount will be send to your email.'
            setTimeout(() => {
                massage.classList.remove('text-success')
                massage.textContent = null
            }, 3000)
        } else {
            massage.classList.add('text-danger')
            massage.textContent = 'Please enter your email adress.'
            setTimeout(() => {
                massage.classList.remove('text-danger')
                massage.textContent = null
            }, 2000)
        }
    }
    return (
        <>
            <p className='mb-0'>Subscribe for get the latest discount.</p>
            <input id='email' type="email" placeholder='Enter your Email' className='form-control w-50 my-2' />
            <div id='massage' className='mb-2'></div>
            <button onClick={subscribe} className='btn btn-success w-50'>Subscribe</button>
        </>
    )
}

export default Subscribe
