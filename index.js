    
    const profile= document.getElementById('ptofile');
    const name =document.getElementById('name');
    const profile_img =document.getElementById('img');
    const repos =document.getElementById('repos');
    const link =document.getElementById('link');
    const repoName =document.getElementById('repoName');
    const repoLang =document.getElementById('repoLang');

    // const button =document.getElementById('getProfile');
    
    const fetchProfile =() =>{
        // const user =`OsamahGharad`;
        // fetch(`https://api.github.com/users/${user}`) why not working !
        fetch(`https://api.github.com/users/OsamahGharad`).then((res)=>res.json()).then((data) =>displayProfile(data));
        
    }
    const fetchRepos =( )=>{
        fetch(`https://api.github.com/users/OsamahGharad/repos`)
        .then((res) =>res.json())
        .then((data) => {
            for(let i=0 ; i<29 ; i++){
                (displayRep(data[i],i+1)) 
              }
        })
        
      
    }
  
    const displayRep =(data,number)=>{
           const repoCard=document.createElement('div');
           repoCard.classList.add('reop_list');
           const repoNumber=document.createElement('p');
           const repoName=document.createElement('p');
           const repoLang=document.createElement('p');
           repoNumber.innerText=`${number}`;
           repoName.innerText=`${data.name}`;
           repoLang.innerText=`${data.language}`;
           repoCard.appendChild(repoNumber);
           repoCard.appendChild(repoName);
           repoCard.appendChild(repoLang);
           repos.appendChild(repoCard);
    }

    const displayProfile= (data) =>{
      
             name.innerHTML=`<span>Name :</span> ${data.login}`;
             profile_img.src=`${data.avatar_url}`;
            //  link.innerText=`URL : ${data.html_url}`;
             link.innerHTML=`<span>URL :</span> <a href=" ${data.html_url}">${data.html_url}</a>`;
                  //  repos.innerHTML= `<span>Repos :</span>${data.repos_url}`
          
        }

window.addEventListener('DOMContentLoaded',(event)=>{
    fetchProfile();
    fetchRepos();
})
    