import React from 'react'
import Comment from './Comment';
import CommentForm from './CommentForm';

function Comments({comments, id}) {
    if (!comments) {
        return (
            <>
            <div className='my-5 py-5'>
                <h1 className='text-center'>No Review</h1>
            </div>
            <CommentForm id={id} />
            </>
        )
    }
    return (
        <>
        {comments.map((comment, index) => <div className='container' key={index}>
            <Comment comment={comment} />
        </div>)}
        <CommentForm id={id} />
        </>
    )
}

export default Comments
