import React, { useState } from 'react'

function ContactFrom() {
    const [state, setState] = useState({form: {}, error: {}})

    const [alert, setAlert] = useState('')

    function submit(e){
        e.preventDefault()
        if(formValidation()){
            console.log('valid');
            e.target.reset()
            setAlert('Thanks for your Comment')
            setState({form: {}, error: {}})
            setTimeout(() => {
                setAlert('')
            }, 5000)
        }
    }

    function formValidation() {
        const errors = {}
        if(!state.form.firstName){
            errors.firstName = 'Firstname is required'
        }
        if(!state.form.lastName){
            errors.lastName = 'Lastname is required'
        }
        if(!state.form.email){
            errors.email = 'Email is required'
        }
        if(!state.form.massage){
            errors.massage = 'Please leave a comment'
        }
        setState({...state, error: errors})
        console.log(errors);
        return !(errors.firstName || errors.lastName || errors.email || errors.massage)
    }


    const changeHandler = e => {
        const data = {
            [e.target.name]: e.target.value
        }
        setState({...state, form: {...state.form, ...data}})
    }

    return (
        <div style={{width: '100%'}} className='row align-items-center justify-content-center mt-5'>
            <form onSubmit={submit} style={{width: '80%'}}>
                <div>
                        <label className='d-block mb-1 mx-3'>Name <span className='text-danger fw-bold'>*</span></label>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <input onChange={changeHandler} name='firstName' className='form-control mx-2' type="text" placeholder='First Name' />
                            <small className='form-text text-danger mx-3'>{state.error.firstName}</small>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <input onChange={changeHandler} name='lastName' className='form-control mx-2' type="text" placeholder='Last Name'  />
                            <small className='form-text text-danger mx-3'>{state.error.lastName}</small>
                        </div>
                    </div>
                </div>
                <div>
                    <label className='d-block mx-3 mt-3 mb-1'>Email <span className='text-danger fw-bold'>*</span></label>
                    <input onChange={changeHandler} name='email' type="text" className='form-control' placeholder='Enter Your Email' />
                    <small className='form-text text-danger mx-3'>{state.error.email}</small>
                </div>
                <div>
                    <label className='d-block mx-3 mt-3 mb-1'>Phone Number <small className='text-muted' style={{fontSize: 11}}>(optional)</small></label>
                    <input onChange={changeHandler} name='phoneNum' type="text" className='form-control' placeholder='Enter Your Phone Number' />
                </div>
                <div>
                    <label className='d-block mx-3 mt-3 mb-1'>Comment or Massage <span className='text-danger fw-bold'>*</span></label>
                    <textarea onChange={changeHandler} name='massage' type="text" rows='5' className='form-control' placeholder='Enter Your Phone Number' />
                    <small className='form-text text-danger mx-3'>{state.error.massage}</small>
                </div>
                <div className='my-3 mx-3'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
            <h4 className='text-center text-success my-5'>{alert}</h4>
        </div>
    )
}

export default ContactFrom
