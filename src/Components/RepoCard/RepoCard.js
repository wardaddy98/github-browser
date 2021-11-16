import React from 'react'
import './RepoCard.css'

function RepoCard({name, description,setSelectedRepo}) {


        return (
            <div className="repo-card " onClick={()=>{setSelectedRepo(name)}}>
                <h1 className='link dim black b'>{name}</h1>
                <p>{description}</p>
            </div>
        )
    
}

export default RepoCard
