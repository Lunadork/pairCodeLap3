import React from 'react'

const Repo = (repo) => 
{
  return 
  (
    <div className='repoDiv'>
        <h3>id: {repo.id} name: {repo.name} </h3>
        <p>forks: {repo.forks} </p>
        <p>open issues: {repo.open_issues}</p>
        
    </div>
  )
}

export default Repo