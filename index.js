    
    const profile= document.getElementById('ptofile');
    const name =document.getElementById('name');
    const profile_img =document.getElementById('img');
    const repos =document.getElementById('repos');
    const link =document.getElementById('link');
    // const button =document.getElementById('getProfile');
    
    const fetchProfile =() =>{
        // const user =`OsamahGharad`;
        // fetch(`https://api.github.com/users/${user}`) why not working !
        fetch(`https://api.github.com/users/OsamahGharad`).then((res)=>res.json()).then((data) =>displayProfile(data));
        
    }
  

    const displayProfile= (data) =>{
      
             name.innerHTML=`<span>Name :</span> ${data.login}`;
             profile_img.src=`${data.avatar_url}`;
            //  link.innerText=`URL : ${data.html_url}`;
             link.innerHTML=`<span>URL :</span> <a href=" ${data.html_url}">${data.html_url}</a>`;
            //  repos.innerHTML= `<span>Repos :</span>${data.repos_url}`
            repos.innerHTML= `<span>Repos :</span> `
        }

window.addEventListener('DOMContentLoaded',fetchProfile)
    