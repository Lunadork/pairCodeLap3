import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Repos from './components/Repos';
import { useState, useEffect} from 'react'
import React from 'react'
import axios from 'axios';


function App() 
{

  const [repos,setRepos] = useState([])

  const searchRepos = async (username) => 
  {
    console.log(`looking for repos for: ${username}`)

      try
      {
        const url = `https://api.github.com/users/${username}/repos`
        const resp = await axios.get(url)
        setRepos(resp.data)     
      } 
      catch (err) 
      {
        console.log(err)
      }
  }

  // useEffect(() => {
   
  //   async function fetchData()
  //   {
  //     await searchRepos("Zeiadork")
  //   }

  //   fetchData()
    
  //   return () => { 
  //   }
  // }, [])

  // useEffect(() => {
  //   return () => {
  //   }
  // }, [repos])
  

  console.log(repos.length)
  return (
    <div className='App'>
      <Header />

      <SearchForm onSearch={searchRepos} />

      {repos.length > 0 ? ( <Repos repos = {[repos]} />) : 'No Repos found.  Please search for a valid github username.'}

    </div>
  )

}

export default App;
