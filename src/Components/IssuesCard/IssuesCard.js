import React from 'react'
import './IssuesCard.css'

function IssuesCard({name,title,avatar}) {
    return (
        <div className='issues-card'>
            <h1 className='tl pa3' >{title}</h1>
            <img className='img' src={avatar} alt='avatar'/>
            <h1>{name}</h1>
            
            
        </div>
    )
}

export default IssuesCard
