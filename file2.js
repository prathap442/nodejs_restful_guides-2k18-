//converting the callbacks to the promises
gitRepositories(user_id,(user_id)=>{
    function gitCommits(repos, (repos[0])=>{
        //to getall the commits
    })
})

function getUserInfo(user_id){
  console.log(`thek user info is ${user_id}`)\
  setTimeout(()=>{
    return {user_id: 1, user_name: "mohan"}
  },2000)
}

function gitCommits(repo_id,callback3){
   if(repo_id){
     //do  the async operation and then call the callback function being passed as an argument
     setTimeout(()=>{
       callback3(repo_id)   
     },2000)
   } 
}

gitRepositories(1,getUserinfo)