import React from 'react'
import {useState} from 'react'
import { RepoDetail } from './RepoDetail';

const Repo = ({repo, onToggle}) => 
{

    const[detailsVisible, setDetailsVisible] = useState(false);

    // onClick={setDetailsVisible(!detailsVisible)}
  return (
    <div className='repoDiv' onDoubleClick={ () => setDetailsVisible(!detailsVisible)}>
        {/* // <div className='repoDiv' onDoubleClick={ isVisible}> */}
        <h3>id: {repo.id} name: {repo.name} </h3>

        {detailsVisible && <RepoDetail repo = {repo} />}

    </div>
  )
}

export default Repo