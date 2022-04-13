import React from 'react'
import Repo from './Repo'
import forkIcon from '../assets/gitIcons/ic_fork.svg'
import issuesIcon from '../assets/gitIcons/ic_issue.svg'
import stargazerIcon from '../assets/gitIcons/iconmonstr-star-5.svg'
import watcherIcon from '../assets/gitIcons/eye-svgrepo-com.svg'
// import { Sparklines, SparklinesLine } from 'react-sparklines'
import { CommitData } from './commitData'

export const RepoDetail = ({ repo }) => {

    let language = "";

    if(!repo.language)
    {
        language = "Can't detect";
    }
    else
    {
        language = repo.language;
    }

    let url = repo.commits_url.slice(0,-6);
    
    return (
        <>
            <div className="repodetaildiv">
                <p className="detailItem"><img className='detailIcon' src={forkIcon} alt="Forks"></img> : {repo.forks} </p>
                <p className="detailItem"><img className='detailIcon' src={issuesIcon} alt="Open Issues"></img> : {repo.open_issues}</p>
                <p className="detailItem"><img className='detailIcon' src={watcherIcon} alt="Watchers"></img> :  {repo.watchers}</p>
                <p className="detailItem"><img className='detailIcon' src={stargazerIcon} alt="Stargazers"></img> : {repo.stargazers_count}</p>
                <p className = "detailItem">Language: {language}</p>

            </div>
            <div className='container px-5'>
            </div>
            <CommitData repoUrl={url}/>

        </>
    )
}
