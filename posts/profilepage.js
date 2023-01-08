window.onload = function () {
  
  let noPost =document.getElementById("noPost")
  noPost.style.display="none"
   getusername()
};
function loginData() {
  let loginData = getLoginData();
  return loginData
}
let loginuser= loginData().username
function getusername() {
  const options = { 
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
        "Authorization": `Bearer ${(loginData()).token}`,
    },
};

  fetch(`https://microbloglite.herokuapp.com/api/posts?limit=100&offset=0&username=${loginData().username}`,options)
    .then((res) => res.json())
    .then((data )=> {


       if(data){

         for (let output of data){
         
           let postedcontentDiv= document.createElement("div")
           let mainContentDiv= document.createElement("div")
           let ContentAreaDiv = document.createElement("p")
           let otherFeatures= document.createElement("div")
           let authorp= document.createElement("p")
           let timep= document.createElement("p")
         
           let timestamp = document.createElement("span")
           let authorName = document.createElement("span")
           let userid = output["._id"]
           mainContentDiv.className="contentposted card-body"
         
           ContentAreaDiv.id=`contentArea ${userid}`
           mainContentDiv.appendChild(ContentAreaDiv)
           // this is for adding the authours and othera
           let byauthors =document.createTextNode("By:")
           authorp.append(byauthors)
           authorName.id=`author ${ userid}`
           authorp.appendChild(authorName)
           
           timep.append("createdtime")
           timestamp.id=`timeStamp ${ userid}`
           timep.appendChild(timestamp)
           otherFeatures.className="otherp"
           otherFeatures.appendChild(authorp)
           otherFeatures.appendChild(timep)
           
           
           mainContentDiv.appendChild(otherFeatures)
           
           postedcontentDiv.className="card postedcontent "
           
           // this isthe main parent appended 
           postedcontentDiv.appendChild(mainContentDiv)
           let maindiv =document.getElementById("maincontentarea")
           maindiv.appendChild(postedcontentDiv)
           let contentare=document.createTextNode(output.text)
           ContentAreaDiv.append(contentare)
           let timess=document.createTextNode(output.createdAt)
           timestamp.append(timess)
           let Name = document.createTextNode(output.username)
           authorName.append(Name)
         
           let authorMain= document.getElementById("authorMain")
           authorMain.innerHTML=output.username
         
           // let noPost =document.getElementById("noPost")
           // noPost.style.display="block"
         }
       }
          
            
         
    });
}

