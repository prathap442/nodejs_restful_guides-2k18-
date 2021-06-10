async function getCustomer(id, callback) {
  try{
    setTimeout(() => {
      callback({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  }
  catch{
    return new Error("The error block from getCustomer")
  }
}

async function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

async function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}

async function stepByStepOperations(){
  const getCustomer = await getCustomer(1,((customer)=>{console.log(customer)}))
  const movies = await getTopMovies((movies)=>{setTimeout(()=>{console.log("movies to be logged");return movies}),2000})
  await sendEmail("p4@yopmail.com", movies,(email)=>{setTimeout(()=>{console.log("Sent Email!!!!!")},3000)})
}

stepByStepOperations()
  .then(()=>{
    console.log("successfully executed step by step operations")
  })
  .catch((err)=>{
    console.log(err.message)
  })


async function Genex(){
  console.log("inside the Genex")
  return "genex here"
}

async function GenexCaller(){
  const g1 = await Genex()
  debugger
  return g1
}
