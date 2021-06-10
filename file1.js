//Promise that is being there in the pending state should eventually
//fall into any of the states like ["resolve","reject"]
//once the function falls into the resolve then it has successfully hit the api and use the keyword "resolve"
//once the function falls inot the reject then the api call that we are making has failed and use the keyword "reject".


const p = new Promise((resolve, reject)=>{
    //put some async work that means that takes time to execute
    setTimeout(()=>{
      console.log("function is being called")
      let value= Math.round(Math.random()*100)
      console.log(value)
      if(value % 2 == 0){
        console.log('even number')
        resolve("1")
      }
      else{
        console.log('odd number')
        reject(new Error("message of the odd number",value))  
      }
    },2000)
})

//conversion of the above callback HEll(which is nothing but looking like nested)
p
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=>{
    console.log(err.message)
  })
