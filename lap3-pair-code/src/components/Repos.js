import React from 'react'
import Repo from './Repo'

const Repos = ({repos}) => 
{

    console.log(`repos at repos comp : ${repos}`)

  return (
    <>

        {repos[0].map((repo) => (<Repo key={repo.id} repo = {repo}  />))}

    </>
  )

}

export default Repos