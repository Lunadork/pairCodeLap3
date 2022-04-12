import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Repos from './components/Repos';
import { useState} from 'react'


function App() 
{

  const [repos,setRepos] = useState([])

  const searchRepos = async (username) => 
  {
    console.log(`looking for repos for: ${username}`)
  }


  return (
    <div className="App">
      
      <Header />
      <SearchForm onSearch={searchRepos} />
      {repos.length > 0 ? ( <Repos />) : 'No Repos found'}

    </div>
  );
}

export default App;
