/* Posts Page JavaScript */

"use strict";
window.onload = function () {
  getAllpost();
  ;

  let Logoutbtn = document.getElementById("Logoutbtn");
  Logoutbtn.onclick = function () {
    logout();
  };
};
let loginuser = getLoginData();
function getAllpost() {
  const options = { 
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginuser.token}`,
    },
};
  fetch("https://microbloglite.herokuapp.com/api/posts?limit=1000&offset=0",options)

    .then((res) => res.json())
    .then((data) => {
      
            data.sort((x, y) => {
                return x["createdAt"].localeCompare(y["createdAt"]) < 0 ? 1 : x.createdAt.localeCompare(y.createdAt) > 0 ? -1 : 0;
            })
      for(let output of data){

        
        createpost(output)
      }
    });
}


function likePost(postId){
  //do the POST to /api/likes sending the json object describing the postId
}

function unlikePost(likeId){
  //do the DELETE to /api/likes/{likeId}
}

function createpost(output){
  let postedcontentDiv= document.createElement("div")
  let mainContentDiv= document.createElement("div")
  let headingcontent= document.createElement("h1")
  let ContentAreaDiv = document.createElement("p")
  let otherFeatures= document.createElement("div")
  let authorp= document.createElement("p")
  let timep= document.createElement("p")
  let likesdiv= document.createElement("div")
  let likebtndiv= document.createElement("div")
  const likedbtn= document.createElement("button")
  let likedbtnOutput= document.createElement("input")
  let dislikeBtnDiv= document.createElement("div")
  let dislikedbtn= document.createElement("button")
  let dislikebtnOutput= document.createElement("input")
  let likelogo=document.createElement("i")
  let dislikelogo=document.createElement("i")
  let timestamp = document.createElement("span")
  let authorName = document.createElement("span")
  let userid = output["._id"]
  // let userobject = {
  //   postId:userId
  // }

  
  mainContentDiv.className="Maincontent card-body"
  // this is for the like logos 
  likelogo.className="fa-regular fa-thumbs-up"
  likedbtn.appendChild(likelogo)
  dislikelogo.className="fa-regular fa-thumbs-down"
  dislikedbtn.appendChild(dislikelogo)
  // this is for the button addedto the div 
  likedbtn.id=`likedbtn ${userid}`
  likebtndiv.appendChild(likedbtn)
  dislikedbtn.id=`dislikebtn ${userid}`
  dislikeBtnDiv.appendChild(dislikedbtn)
  likesdiv.appendChild(likebtndiv)
  likesdiv.appendChild(dislikeBtnDiv)
  // this is for the likes btn output 
  likedbtnOutput.id=`likeOutput ${userid}`
  likedbtnOutput.type="number"
  likedbtnOutput.value="0"
  likebtndiv.appendChild(likedbtnOutput)
  
  // this is for the dislike output 
  dislikebtnOutput.id=`dislikeOutput ${userid}`
  dislikebtnOutput.type="number"
  dislikebtnOutput.value="0"
  dislikeBtnDiv.appendChild(dislikebtnOutput)
  


  // this is for the content area 
  headingcontent.id=`headingcontent ${userid}`
  mainContentDiv.appendChild(headingcontent)
  ContentAreaDiv.id=`contentArea ${userid}`
  mainContentDiv.appendChild(ContentAreaDiv)
  // this is for adding the authours and othera
  let byauthors =document.createTextNode("By:")
  authorp.append(byauthors)
  authorName.id=`author ${ userid}`
  authorp.appendChild(authorName)
  let createdtime =document.createTextNode("Created:")
  timep.append(createdtime)
  timestamp.id=`timeStamp ${ userid}`
  timep.appendChild(timestamp)
  otherFeatures.className="otherp"
  otherFeatures.appendChild(authorp)
  otherFeatures.appendChild(timep)
  otherFeatures.appendChild(likesdiv)
  
  mainContentDiv.appendChild(otherFeatures)
  
  postedcontentDiv.className="card postedcontent"
  // this is all the class for likesdiv
  likesdiv.className="likesdiv"
  likebtndiv.className="likes"
  dislikeBtnDiv.className="likes"
  // this isthe main parent appended 
  postedcontentDiv.appendChild(mainContentDiv)
  let maindiv =document.getElementById("main-content")
  maindiv.appendChild(postedcontentDiv)
  let contentare=document.createTextNode(output.text)
  ContentAreaDiv.append(contentare)
  let timess=document.createTextNode(output.createdAt)

  timestamp.append(timess)
  let Name = document.createTextNode(output.username)
  authorName.append(Name)

  // onClickedlikesBtn(likedbtn, likedbtnOutput,userobject)
  // likedbtn.addEventListener("click", function(){
    // const options={
    //   method: 'POST',
    //   body: JSON.stringify(userobject),
    //   headers:{
    //       "Content-Type": 'application/json',
    //     Authorization: `Bearer ${loginuser.token}`,
  
    //   }
      
  
    // }
    //   fetch(api+"/api/likes",options)
    //     .then(res=>res.json())
    //     .then(likes=> {
      
    //    console.log("hi")
    //     likedbtnOutput.value = parseInt(likedbtnOutput.value) + 1;
      
    
    //   })
    // })

}

// function onClickedlikesBtn(likedbtn, likedbtnOutput,userobject) {

//   likedbtn.addEventListener("click", function(){
//   const options={
//     method: 'POST',
//     body: JSON.stringify(userobject),
//     headers:{
//         "Content-Type": 'application/json',
//       Authorization: `Bearer ${loginuser.token}`,

//     }
    

//   }
//     fetch(api+"/api/likes",options)
//       .then(res=>res.json())
//       .then(likes=> {
    
//      console.log("hi")
//       likedbtnOutput.value = parseInt(likedbtnOutput.value) + 1;
    
  
//     })
//   })
  
  
//   // dislikedbtn.addEventListener("click", () => {
//   //   fetch(api+"/api/likes",options)
//   // .then(res=>res.json())
//   // .then(likes=> {
  
   

 
//   // dislikebtnOutput.value = parseInt(dislikebtnOutput.value) + 1;

//   // })
  // })

 
//}
