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

     CursoCtrl.actualizar= async(req,res)=>{
        const id= req.params.id
    
         await Curso.findByIdAndUpdate({_id:id}, req.body)
         res.json({
    
            mensaje:'Curso Actualizado Correctamente'
    
    
         })
        }

module.exports = CursoCtrl