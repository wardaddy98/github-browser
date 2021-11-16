import React from 'react'
import './CommitsWindow.css'


function CommitsWindow({commitUser, commitDate, commitMessage, commitAvatar}) {
   

    return (
             <div className='contents-commits tl'>
                <h3>{commitDate.slice(0,10)}</h3>
                <p >{commitMessage}</p>
                <img src={commitAvatar} className='commit-avatar dib' alt='user' />
                <h2 className='dib pl3' >{commitUser}</h2>
            </div> 
    )
}

export default CommitsWindow
