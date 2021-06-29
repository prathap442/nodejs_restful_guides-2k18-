const PORT = process.env.PORT || 2525
const mongoPort = 27017
const mongodbUrl = `mongodb://${process.env.db_service_name}:${mongoPort}/${process.env.db_name}`
console.log("the mongo db url is .....")
console.log(mongodbUrl)

const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.get('/',(request, response)=>{
   response.send("hello world") 
})
const db = mongoose.connection
mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

let connectWithRetry = function () {
  return mongoose.connect(mongodbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
};

connectWithRetry()
//now we connect to the data base once the db is connected then immediate thing is to connect tot the express server
//runningo n the port 2525
db.on('connected',function(){  
  console.log("now connected to the database")  
  express.listen(PORT,()=>{
     console.log(`Listening on the express port ${PORT}`) 
  })
  const Cat = mongoose.model('Cat', { name: String });
  let c1 = new Cat({name: "Kitty"})
  c1.save().then((res)=>{
    console.log('meow',res)
  })
})

db.on('err', function(){
  console.log("failed while connecting to the database")
  setTimeout(()=>{
    connectWithRetry()
  }, 2000)
})


