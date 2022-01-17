import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchForm() {

    const [state, setState] = useState()

    const navigate = useNavigate()

    const submit = (e) => {
        e.target.reset()
        e.preventDefault()
        navigate('/?q=' + state)
    }

    return (
        <>
        <form onSubmit={submit} className="d-flex">
            <input onChange={e => setState(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </>
    )
}

export default SearchForm
