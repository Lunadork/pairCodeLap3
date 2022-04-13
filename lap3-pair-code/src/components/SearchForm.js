import React from 'react'
import { useState } from 'react'

const SearchForm = ({ onSearch }) => {

    const [username, setUsername] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        if (!username) {
            alert("Please enter a username");
            return
        }
        onSearch(username)
    }


    return (
        <div className='row py-5 '>
            <div className="card shadow">
                <form onSubmit={submitForm}>
                    <div className='card-body px-5'>
                        <label className='card-title'>Username</label>
                        <input className=' card-text form-control' type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
                        <input className='btn btn-secondary my-2' type='submit' value='Search for repos' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm
