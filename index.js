const express = require("express")
const app = express()
var port = 4000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/swag-shop").then(()=>{
    console.log("Mongodb is Connected")
})

var Product = require("./model/products")
var wishList = require("./model/wishlist")

let data;

app.get("/", function(req,res){
    res.end("Hello World")
})

app.post("/product", async function(req,res){
    var product = new Product()
    product.title = req.body.title
    product.price = req.body.price

    const output = await product.save()
    console.log(output)
    res.send(output)
  
})



app.listen(port,(req,res)=>{
    console.log(`Server is listening on ${port}`)
})

