import React, { useEffect, useState } from 'react'
import BranchCard from '../BranchCard/BranchCard';
import IssuesCard from '../IssuesCard/IssuesCard';
import CommitsWindow from '../CommitsWindow/CommitsWindow';
import './DetailsWindow.css'


function DetailsWindow({selectedRepo, setToDelete, commitData, setCommitData}) {

const [branchName, setBranchName]= useState([]);
const [view, setView]= useState('branches');
var [issueData,setIssueData]= useState([]);
const [selectedBranch, setSelectedBranch]= useState('');


var dummy= []; 
var dummy2={};


useEffect(()=>{

    fetch(`https://api.github.com/repos/cfinke/${selectedRepo}/branches`).then((response)=>{
        return(response.json());
    }).then((result)=>{
        assignBranchData(result);
    });

},[selectedRepo])

const assignBranchData= (result)=>{
    dummy=[];
    for(let i=0; i<result.length; i++){
         dummy.push(result[i].name) ;
        }
        setBranchName(dummy);
}






useEffect(()=>{

    fetch(`https://api.github.com/repos/cfinke/${selectedRepo}/issues`).then((result1)=>{
        return(result1.json());
    }).then((result2)=>{
        assignIssueData(result2);
    })

},[selectedRepo])


const assignIssueData=(result)=>{
        dummy={};
        let empty=[];
        for(let i=0; i<result.length; i++){
            dummy2.id=i;
            dummy2.user_name=result[i].user.login;
            dummy2.issue_title= result[i].title;
            dummy2.avatar_url= result[i].user.avatar_url;
            
            empty.push(dummy2);
        }
        setIssueData(empty);
    
    
}


useEffect(()=>{
    if(view==='commits'){
        
        fetch(`https://api.github.com/repos/cfinke/${selectedRepo}/commits?sha=${selectedBranch}`).then((response)=>{
            return(response.json()).then((result)=>{
                let empty=[], dummy={};
                for(let i=0;i<result.length;i++){
                        dummy={};
                    dummy.name=result[i].commit.committer.name;
                    dummy.date=result[i].commit.committer.date;
                    dummy.message=result[i].commit.message;
                    if((result[i].committer.avatar_url).length>0){
                        dummy.avatar=result[i].committer.avatar_url;
                    }else{
                        dummy.avatar='';
                    }
                    
                    console.log(dummy.avatar);
                    
                    empty.push(dummy);
                    
                }
                setCommitData(empty);
                 })
         }).catch((err)=>alert('Avatar url not present for this branch. Try another Branch'))
        
    }
},[view])



const  onBranchesPress=()=>{
    setView('branches');  
}

const  onIssuesPress=()=>{
    setView('issues');
    
}





const getContents=()=>{
    let contents;
      


    if(view==='branches' && branchName.length>0){
            contents =   branchName.map((value,index)=>{
                return (<BranchCard bname={value} key={index} setView={setView} setSelectedBranch={setSelectedBranch} selectedBranch={selectedBranch}/>)
            });
        }else if(view==='branches' && branchName.length===0){
            contents=(<h1>Select any Repository</h1>)
        }
        else if(view==='issues' && issueData.length>0){

                contents= issueData.map((value2,index)=>{
                    return(<IssuesCard name={value2.user_name} title={value2.issue_title} avatar={value2.avatar_url} key={index}/>) 
                })
        
        }
        else if(view==='issues' && issueData.length===0){
            contents=(<h1>Selected Repo has No Issues</h1>)
        }
        else{
            contents=(<h1>nothing to display</h1>)
        }

        return contents;
 }     
    
 const handleDeletePress=()=>{
    setToDelete(selectedRepo);
    setView('branches');
}

const handleBackButton=()=>{
    setView('branches');
}



if(view==='commits'){
    
        return(
            <div className='details-window'>
                    <div className='commits-window'>
                            <div className='header-commits'>
                                <button onClick={()=>handleBackButton()} className='back-button tl f6 link dim br1 pl2 pa3 dib white bg-purple'>BACK</button>
                                <h1 className='tc dib pl7'>Commits {selectedBranch}</h1>
                            </div>
                            {
                                commitData.map((value,index)=>{
                                    return(<CommitsWindow commitUser={value.name} commitDate={value.date} commitMessage={value.message} commitAvatar={value.avatar} key={index}/>)
                                })
                               
                                
                            }
                            
                    </div>
                    
        </div>
            )

}else{


    return (
        <div className='details-window'>
                <div className='button-container tr'>
                        <button className='f6 link dim br1 ph3 pv2 mb2 dib white bg-purple' onClick={()=>{
                                handleDeletePress();
                            }}>DELETE REPO</button>
                </div>

                <div className='main-Container'>
                        <div className='tabs'>
                                <button className='f6 link dim br1  pa2 white bg-purple ' onClick={()=>{
                                    onBranchesPress();
                                }}>BRANCHES</button>

                                <button className='f6 link dim br1  pa2 white bg-purple ' onClick={()=>{
                                    onIssuesPress();
                                }}>ISSUES</button>

                        </div>

                        <div className='contents'>
                                {getContents()}
                        </div>

                </div>
        </div>
    )
}
    
    
}

export default DetailsWindow ;



