const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

var ingredients = [
    {
        "id":"8596AK",
        "text":"bacon"
    },
    {
        "id":"7856AK",
        "text":"Cheese"
    },
    {
        "id":"85996AK",
        "text":"Roast"
    },
    {
        "id":"7396AK",
        "text":"Milk"
    },

]
app.get("/", function(req,res){
    res.send(ingredients)
})

var port = 4000


app.post("/", function(req,res){
    var ingredient = req.body
    if (!ingredient || ingredient.text === ""){
        res.status(200).send({error:"Your Ingredient Must have Text"})
    }
    else{
        ingredients.push(ingredient)
        res.status(200).send(ingredients)
    }
})


app.listen(port,(req,res)=>{
    console.log(`Server is listening on ${port}`)
})