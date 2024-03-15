const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Distributors = new Schema({
    name:{
        type:String,unique:true,maxLength:255
    },
   

},{
    timestamps:true
})
module.exports = mongoose.model('distributor',Distributors)
