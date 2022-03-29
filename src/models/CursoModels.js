const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
    nombrecurso:{type: String, required:true},
    categoria:{type: String, 
    
    },
    profesor:{type: String},
    name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      cloudinary_id: {
        type: String,
      },
    postDate:{type:Date, default:Date.now},

})

const Cursos =mongoose.model("cursos", CursoSchema);
module.exports=Cursos;
