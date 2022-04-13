import React from 'react'
import Repo from './Repo'

const Repos = (repos) => 
{
  console.log(Object.entries(repos))
  return (
    <>
        {repos.map((repo) => 
        (
            <Repo key={repo.id} repo = {repo} />
        ))}
    </>
  )

}

export default Repos
