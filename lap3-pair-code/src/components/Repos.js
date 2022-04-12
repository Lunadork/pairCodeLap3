import React from 'react'
import Repo from './Repo'

const Repos = (repos) => 
{

  return 
  (
    <>
        {repos.map((repo) => 
        (
            <Repo key={repo.id} repo = {repo} />
        ))}
    </>
  )

}

export default Repos