const PORT = process.env.PORT || 2525
const mongoPort = 27017
const mongodbUrl = `mongodb://${process.env.db_service_name}:${mongoPort}/${process.env.db_name}`
console.log("the mongo db url is .....")
console.log(mongodbUrl)
const mongoose = require('mongoose')
const express = require('express')
const logger = require('winston')
const app = express()

app.get('/prathap',(request, response)=>{
  response.send("hello world") 
})

app.get('/',(request, response)=>{
   response.send("hello world") 
})

const db = mongoose.connection
let connectWithRetry = function () {
  return mongoose.connect(mongodbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .catch((err)=>{
    console.log("the error that occured is", err)
    connectWithRetry()
  })
};



mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log("the database is connected")
  })
  .catch((err)=>{
    console.log()
    connectWithRetry()
    //now we connect to the data base once the db is connected then immediate thing is to connect tot the express server
    //runningo n the port 2525
  })

db.on('connected',function(){  
  console.log("now connected to the database")  
  app.listen(PORT,()=>{
     console.log(`Listening on the express port ${PORT}`) 
  })
})

db.on('err', function(){
  console.log("failed while connecting to the database")
  setTimeout(()=>{
    connectWithRetry()
  }, 2000)
})


const courseSchema = {
  name: String,
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now },
  is_published: Boolean
}



const Course = mongoose.model('Course', courseSchema);
//so now that we have created the Model we are ready to use it as the we create
//the objects in the Object Oriented Programming
const c1 = new Course({name: "Course1", author: "jay", tags: ['motivation'], is_published: true})
c1.save().then((s1)=>{ console.log("successfully saved")})
