"use strict";


const postId = document.getElementById("postId");
const addPost = document.getElementById("addPost");
const input1 = document.getElementById("input1");
const textArea1 = document.getElementById("textArea1");
const logoutBtn = document.getElementById("logoutBtn");

const PostOutput = document.getElementById("PostOutput");
const userName = document.getElementById("userName");






window.onload = () =>{
    document.getElementById("addPost").style.display = "none";

    let userName = getLoginData().username;
    console.log( userName);

    // document.getElementById("userName").innerHTML = username;

    userProfileName();

    isLoggedIn();


    function isLoggedIn() {
        return {
          username: userName
        }
      }
      
      let { username } = isLoggedIn();
      document.getElementById("userName").innerText = username;
      
      


    

      postId.onclick = () =>{
    document.getElementById("addPost").style.display = "block";
    }

 

        logoutBtn.onclick = () =>{
            logout();
        }
    

        addPost.onsubmit = (submit) =>{

            let textArea1 = document.getElementById("textArea1").value;
            console.log(JSON.stringify({ text: textArea1}));
                fetch('https://microbloglite.herokuapp.com/api/posts', {
                    method: 'POST',
                    headers: {
                        'Accept' : 'application/json, text/plain, */*',
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${(getLoginData()).token}`
                       
                     },
                            body: JSON.stringify({ text: textArea1})
                  
        
        
                })
                .then((response) => response.json())
                .then((body) => {
                    let PostOutput = `<h3>Post</h3>`;
                    PostOutput += ` <ul>
                   
                    <li> ID: ${body._id}</li>
                    <li> Created At: ${body.createdAt.toLocaleString()}</li>
                    <li> Text: ${body.text}</li>
                    <li> User Name: ${body.username}</li>
                    
                    </ul>`;
        
        
                     document.getElementById("PostOutput").innerHTML = PostOutput; 
                     console.log(body);
                })
        
          
        
        
        }

}



function userProfileName(){
    let userName = document.getElementById("userName");
    // userName.innerHTML = username;
}
