const CursoCtrl= {} 
const Curso = require('../models/CursoModels')
const cloudinary = require("../utils/cloudinary");

CursoCtrl.crear = async (req, res) => {
    try {
      // subiendo  imagen a cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
    const {nombrecurso, categoria, profesor, name }= req.body
    
    const curso =  new Curso({
        nombrecurso, 
        categoria, 
        profesor, 
        name,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
    })

    // guardar Curso
    await curso.save();
    res.json(curso);
  } catch (err) {
    console.log(err);
  }
};
CursoCtrl.listar = async(req,res)=>{

    const respuesta = await Curso.find()
    res.json(respuesta)


}/*
CursoCtrl.listarId = async(req,res)=>{
    const id= req.params.id

    const respuesta = await Curso.findById({_id:id})
    res.json(respuesta)


}
*/

CursoCtrl.eliminar = async(req,res)=>{
    const id= req.params.id

     await Curso.findByIdAndRemove({_id:id})
     res.json({

        mensaje:'Curso eliminado Correctamente'


     })
    }

     CursoCtrl.actualizar= async (req, res) => {
        try {
          let curso = await Curso.findById(req.params.id);
          // Eliminar imagen de cloudinary
         
          await cloudinary.uploader.destroy(curso.cloudinary_id);
          // subir imagen a cloudinary 
          
          let result;
          if (req.file) {
            result = await cloudinary.uploader.upload(req.file.path);
          }
          const data = {
            nombrecurso: req.body.nombrecurso || curso. nombrecurso,
            categoria: req.body.categoria || curso. categoria,
            profesor: req.body.profesor || curso.profesor,
            
            name: req.body.name || curso.name,
            avatar: result?.secure_url || curso.avatar,
            cloudinary_id: result?.public_id || curso.cloudinary_id,
          };
          curso = await Curso.findByIdAndUpdate(req.params.id, data, { new: true });
          res.json(curso);
        } catch (err) {
          console.log(err);
        }
      }

module.exports = CursoCtrl