const mongoose = require ('mongoose')

const db = mongoose.Schema({
    Name:String
})

module.exports=mongoose.model('db',db)