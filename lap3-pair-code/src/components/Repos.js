import React from 'react'
import Repo from './Repo'

const Repos = ({repos, onToggle}) => 
{
  return (
    <section className="">

        {repos[0].map((repo) => (<Repo key={repo.id} repo = {repo} onToggle ={onToggle}  />))}

    </section>
  )

}

export default Repos
