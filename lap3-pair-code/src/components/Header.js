import React from 'react'
import githubsvg from '../assets/gitIcons/github.svg'

const Header = ({onSearch}) => {
  return (
    <div className="headerdiv">
      <img className="githubsvg" src={githubsvg}></img>
      <h1 className='pt-4 header'>Repo stats fetcher</h1>
    </div>
  )
}

export default Header

