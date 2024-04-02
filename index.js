const express = require("express")
const app = express()
const readLineSync = require("readline-sync")

var name = readLineSync.question("What is your Name ")
console.log("Hello " + name)

var port = 4000



app.listen(port,(req,res)=>{
    console.log(`Server is listening on ${port}`)
})