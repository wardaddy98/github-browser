import React , {useEffect, useState} from 'react';
import RepositoryWindow from '../RepositoryWindow/RepositoryWindow';
import DetailsWindow from '../DetailsWindow/DetailsWindow';
import './Window.css';
import NewRepoCard from '../NewRepoCard/NewRepoCard';


const Window= ()=>{
    
const [selectedRepo, setSelectedRepo]= useState('');
const [toDelete, setToDelete]=useState('');
const [displayRepoCard, setDisplayRepoCard]= useState(false);
const[newUserName,setNewUserName]=useState('');
const[newRepoName,setNewRepoName]= useState('');
const[submitRepo,setSubmitRepo]= useState(false);
const [repoName,setRepoName]=useState([]);
const [repoDescription,SetRepoDescription]=useState([]);
const [commitData, setCommitData]=useState([]);



    if(displayRepoCard){
        return(<NewRepoCard setNewRepoName={setNewRepoName} setNewUserName={setNewUserName} newUserName={newUserName} newRepoName={newRepoName} setSubmitRepo={setSubmitRepo} setDisplayRepoCard={setDisplayRepoCard}/>)

    }else if(displayRepoCard===false){
        return(
            <div className='window'>
                <RepositoryWindow 
                    setSelectedRepo={setSelectedRepo} 
                    toDelete={toDelete} 
                    setDisplayRepoCard={setDisplayRepoCard}
                    newUserName={newUserName}
                    newRepoName={newRepoName}
                    submitRepo={submitRepo}
                    setSubmitRepo={setSubmitRepo}
                    repoName={repoName}
                    repoDescription={repoDescription}
                    setRepoName={setRepoName}
                    SetRepoDescription={SetRepoDescription}
                />

                <DetailsWindow selectedRepo={selectedRepo} setToDelete={setToDelete} commitData={commitData} setCommitData={setCommitData} />
            </div> 
        )
    }
     
}

export default Window;