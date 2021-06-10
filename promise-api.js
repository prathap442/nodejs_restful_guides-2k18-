//create the settled Promise
let p1 = Promise.resolve({id: 1, user_name: 'mohan'})
let p2 = Promise.reject({id: 1, user_name: 'mohan'})
console.log(p1)
p1
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=>{
    console.log(err.message)
  })