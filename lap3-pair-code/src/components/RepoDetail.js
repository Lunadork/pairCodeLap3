import React from 'react'
import Repo from './Repo'

export const RepoDetail = ({repo}) => {
    
    return (
        <>
        <p>forks: {repo.forks} </p>
        <p>open issues: {repo.open_issues}</p>
        <p>watchers :  {repo.watchers}</p>
        <p>Stargazers: {repo.stargazers_count}</p>
        </>
    )
}