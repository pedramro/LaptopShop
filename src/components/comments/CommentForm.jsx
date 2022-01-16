import React, { useState } from 'react'
import { getProducts } from '../service/service'

function CommentForm({id}) {
    let defaultPic = 'https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png'

    const [state, setState] = useState({comment: {pic: defaultPic}, error: {}})

    const submit = e => {
        e.preventDefault()
        if (formValidation()) {
            console.log(state.comment);
            getProducts.addComment(id, state.comment)
            setState({comment: {}, error: {}})
            e.target.reset()
            window.location.reload(false)
        }
    }

    function formValidation() {
        const errors = {}
        if (!state.comment.author) {
            errors.author = "Name is required!"
        }
        if (!state.comment.text) {
            errors.comment = "Comment is required!"
        }
        setState({...state, error: errors})
        return !(errors.author || errors.text)
    }

    const changeHandler = e => {
        const data = {
            [e.target.name] : e.target.value
        }
        setState({...state, comment: {...state.comment, ...data}})
    }

    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label className='mx-2'>Name<span className='text-danger fw-bold'> *</span></label>
                <input onChange={changeHandler} name='author' type="text" className="input form-control" placeholder="Enter your name" />
                <small className="form-text text-danger">{state.error.name}</small>
            </div>
            
            <div className="form-group">
                <label className='mx-2 mt-3 mb-1'>Comment<span className='text-danger fw-bold'> *</span></label>
                <textarea onChange={changeHandler} name='text' type="text" rows='5' className="input form-control" placeholder="Enter your Commnet about this product ..." />
                <small className="form-text text-danger">{state.error.comment}</small>
            </div>
            <button type="submit" className="btn btn-primary my-4">Submit</button>
        </form>
    )
}

export default CommentForm
