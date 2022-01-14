import React from 'react'

function ContactFrom() {
    return (
        <div style={{width: '100%'}} className='row align-items-center justify-content-center mt-5'>
            <form style={{width: '80%'}}>
                <div>
                        <label className='d-block mb-1 mx-3'>Name <span className='text-danger fw-bold'>*</span></label>
                    <div className='d-flex'>
                        <input className='form-control mx-2' type="text" placeholder='First Name' />
                        <input className='form-control mx-2' type="text" placeholder='Last Name'  />
                    </div>
                </div>
                <div>
                    <label className='d-block mx-3 mt-3 mb-1'>Email <span className='text-danger fw-bold'>*</span></label>
                    <input type="text" className='form-control' placeholder='Enter Your Email' />
                </div>
                <div>
                    <label className='d-block mx-3 mt-3 mb-1'>Phone Number</label>
                    <input type="text" className='form-control' placeholder='Enter Your Phone Number' />
                </div>
                <div>
                    <label className='d-block mx-3 mt-3 mb-1'>Comment or Massage <span className='text-danger fw-bold'>*</span></label>
                    <textarea type="text" rows='5' className='form-control' placeholder='Enter Your Phone Number' />
                </div>
                <div className='my-3 mx-3'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom
