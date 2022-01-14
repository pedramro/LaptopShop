import React from 'react'

function Comment({comment}) {
    return (
        <>
            <div className='d-flex mb-3'>
                <div style={{width: '80px'}}>
                    <img className='rounded-circle' src={comment.pic} width='100%' />
                </div>
                <h3 className='mt-4 mx-3'>{comment.author}</h3>
            </div>
            <p className='mx-3'>{comment.text}</p>
            <hr className='my-5' />
        </>
    )
}

export default Comment
