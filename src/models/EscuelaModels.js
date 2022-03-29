const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EscuelaShema = new Schema({



nombre: {
    type: String,
    required: true,
  },
 
  dateFounded: {
    type: Date,
    default: Date.now(),
  },
  director: {
    type: String,
    required: true,
  },
  
  gestion: {
    type: String,
    required: true,
  },
  
  curso: String


})

module.exports = mongoose.model('escuela', EscuelaShema )