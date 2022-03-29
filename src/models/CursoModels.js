const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CursoShema = new Schema({

nombrecurso:String,
escuela:String,
escuelaCiudad:String,

date:{type:Date,default:Date.now}


})

module.exports = mongoose.model('curso', CursoShema )

