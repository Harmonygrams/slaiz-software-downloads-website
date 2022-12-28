const {model, Schema} = require('mongoose')
const fileSchema = Schema({
    name : {type : String, required : true, trim : true}, 
    description : {type : String, trim : true}, 
    image : {type : String}, 
    downloads : {type : Number, default : 0}, 
    isFree : {type : Boolean, required : true}, 
    downloadUrl : {type : String, requred : true }, 
    comments : {type : Array},
    tags : {type : Array},
})
const File = model('File', fileSchema)
module.exports = File 
