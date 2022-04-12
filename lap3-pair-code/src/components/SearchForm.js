import React from 'react'
import {useState} from 'react'

const SearchForm = ({onSearch}) => {

    const [username, setUsername] = useState('');

    const submitForm = (e) => 
    {
        e.preventDefault();

        if(!username)
        {
            alert("Please enter a username");
            return
        }

        onSearch(username)

    }


  return (
    <form onSubmit ={submitForm}>

        <div>
            <label>Username</label>
            <input type = 'text' placeholder = 'Enter username' onChange = {(e) => setUsername(e.target.value)} />
        </div>

        <input type = 'submit' value = 'Search for repos' />

    </form>
  )
}

export default SearchForm