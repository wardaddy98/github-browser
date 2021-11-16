import React from 'react'
import './NewRepoCard.css';





function NewRepoCard({setNewRepoName, setNewUserName, setSubmitRepo, setDisplayRepoCard}){



    const handleUserPress=(event)=>{
            setNewUserName(event.target.value);

    }
    
    const handleNamePress=(event)=>{
        
            setNewRepoName(event.target.value);
    
    }

    const handleBackRepoCard=()=>{
        setDisplayRepoCard(false);
    }


    const handleSubmit=()=>{
        setSubmitRepo(true);
        setDisplayRepoCard(false);
    }




    return (
        
        <div className='form'>
            
            <div className='fhead'>
                <h1 className='tc'>ADD NEW REPOSITORY</h1>
            </div>
             


             <div className='fbody'>
                    <label htmlFor='user ' className='db pv2'>Owner/Organisation</label>
                    <input type='text' id='user'
                        className='db pv2'
                        placeholder='eg:wardaddy98'
                        onKeyUp={(event)=>{
                            handleNamePress(event);
                            
                        }}
                        required
                    />

                    <label htmlFor='repo' className='db pv2'>Repository Name</label>
                    <input type= 'text' id='repo' className='db pv2'
                        placeholder='eg: github-browser'
                        onKeyUp={(event)=>{
                            handleUserPress(event);
                            
                        }}
                        required
                    />
                    <button onClick={()=>handleBackRepoCard()} className='pv2 link dim white bg-black'>BACK</button>
                    <button onClick={()=>{
                        handleSubmit();
                    }}
                    type='submit' className='pv2 link dim '>ADD</button>
             </div>
            
        </div> 












    )
}

export default NewRepoCard
