import React from 'react'
import Repo from './Repo'

const Repos = ({repos, onToggle}) => 
{
  return (
    <>

        {repos[0].map((repo) => (<Repo key={repo.id} repo = {repo} onToggle ={onToggle}  />))}

    </>
  )

}

export default Repos