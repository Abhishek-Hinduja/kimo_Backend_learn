var mongoose = require("mongoose")
const products = require("./products")
var Schema = mongoose.Schema
var Objectid = mongoose.Schema.Types.ObjectId

var wishlist = new Schema({
    title : {type: String, default:"Cool Wish List"},
    products : [{type:Objectid, ref:'Product'}]
})

module.exports = mongoose.model('wishList',wishlist)