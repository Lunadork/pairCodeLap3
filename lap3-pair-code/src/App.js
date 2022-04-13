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
        console.log("data:" +resp.data[0].id)
       
        setRepos(resp.data)

        repos.forEach((repo) => 
        {
          console.log(repo.id);
        })

        
      } 
      catch (err) 
      {
        console.log(err)
      }
  }

  useEffect(async () => {
   
    // await searchRepos("Zeiadork")
    return () => {
      
    }
  }, [])
  


  return (
    <div className='App'>
      <Header />

      <SearchForm onSearch={searchRepos} />

      {repos > 0 ? ( <Repos repos = {repos} />) : 'No Repos found'}

    </div>
  )

}

export default App;
