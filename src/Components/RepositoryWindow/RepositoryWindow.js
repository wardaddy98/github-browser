import React, { useEffect, useState} from 'react';
import './RepositoryWindow.css';
import RepoCard from '../RepoCard/RepoCard';



function RepositoryWindow({ setSelectedRepo,toDelete,setDisplayRepoCard, newUserName,newRepoName, submitRepo, setSubmitRepo,repoName,repoDescription,setRepoName,SetRepoDescription}) {
   
   

useEffect(()=>{
    fetch('https://api.github.com/users/cfinke/repos').then((response)=>{
        return(response.json()).then((result)=>{
            assignData(result);       
        })
    });

},[])




    



useEffect(()=>{
    if(submitRepo){
       addRepo()
    }  
},[submitRepo])


const addRepo=()=>{
     let dummy1=[]; let dummy2=[];
    dummy1=repoName.slice();
    dummy2=repoDescription.slice();

    fetch(`https://api.github.com/repos/${newUserName}/${newRepoName}`).then((response=>{
        return(response.json());
    })).then((output)=>{
            dummy1.unshift(output.name);
            dummy2.unshift(output.description);
            setRepoName(dummy1);
            SetRepoDescription(dummy2);
            setSubmitRepo(false);
        
        
        })
}



const assignData=(result)=>{
   let empty1=[]; let empty2=[];
    for(let i=0;i<result.length;i++){  
            empty1.push(result[i].name);
            empty2.push(result[i].description);
    }
    setRepoName(empty1);
    SetRepoDescription(empty2);
}



useEffect(()=>{
    const arr= repoName.filter((value,index)=>{
        if(index!==repoName.indexOf(toDelete)){
            return value;
        }
    })
    setRepoName(arr);
    setSelectedRepo('');
},[toDelete])





const handleAddButton=()=>{
    setDisplayRepoCard(true);
}



            return(
                <div className='repository-window'>
                    <div className='repos'>
                        {repoName.map((dummy,index)=>{
                                return(<RepoCard name={dummy} description={repoDescription[index]} key={index} setSelectedRepo={setSelectedRepo} />)
                                
                            })}
                    </div>

                    <div className='button-window'>
                        <button 
                            onClick={()=>{
                                handleAddButton();
                            }}
                            className='add-button f2 link dim  ph3 pv2 white bg-purple'>+</button>
                    </div>
                    


                </div>
            )
   
         


}



export default RepositoryWindow ;





