import React from 'react'
import Comment from './Comment';

function Comments({comments}) {
    console.log(comments);
    if (!comments) {
        return (
            <div className='my-5 py-5'>
                <h1 className='text-center'>No Review</h1>
            </div>
        )
    }
    return (
        comments.map((comment, index) => <div className='container' key={index}>
            <Comment comment={comment} />
        </div>)
    )
}

export default Comments
