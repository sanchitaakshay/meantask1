const mongoose=require('mongoose')
const Schema=mongoose.Schema
newSchema=new Schema({
    firstname:String,
    lastname:String,
    age:String,
    gender:String,
    mobile:String
})
module.exports=mongoose.model('User',newSchema)