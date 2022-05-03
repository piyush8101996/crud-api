const mongoose=require('mongoose')



//Created product schema
const Productdetail= new mongoose.Schema({
    title:{type:String},
    price:{type:String},
    details:{type:String}
})



//creation of collection of name -produt

module.exports=mongoose.model("Product",Productdetail);