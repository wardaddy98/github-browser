import React from 'react';
import './BranchCard.css';

const BranchCard=({bname, setView, setSelectedBranch, selectedBranch})=>{

    const handleBranchClick=()=>{
        setView('commits');
        setSelectedBranch(bname);
    }


    return(
        <div onClick={handleBranchClick} className='branch-card'>
            <h1 className='link dim black b'>{bname}</h1>
        </div>
    )
}

export default BranchCard;