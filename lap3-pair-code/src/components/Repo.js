import React from 'react'
import {useState} from 'react'
import { RepoDetail } from './RepoDetail';

const Repo = ({repo, onToggle}) => 
{

    const[detailsVisible, setDetailsVisible] = useState(false);

    let date = repo.updated_at.split("T")[0];

    let time = repo.updated_at.split("T")[1].slice(0,-4);

    // onClick={setDetailsVisible(!detailsVisible)}
  return (
    <div className='repoDiv  shadow-lg' onClick={ () => setDetailsVisible(!detailsVisible)}>
        {/* // <div className='repoDiv' onDoubleClick={ isVisible}> */}
        <h3 className = "idandname">{repo.full_name} </h3>
        <span className = "visibility">{repo.visibility}</span>
        <br/>
          <a className="url" href={repo.html_url}>
            {repo.html_url}
          </a>
        <br/>
        
        <p className = "description">{repo.description}</p>
        <p className = "url">Last Update: {date}, {time}</p>
        <p className = "doubleclickfordetails"> Click for more/less details </p>

        {detailsVisible && <RepoDetail repo = {repo} />}

    </div>
  )
}

export default Repo
