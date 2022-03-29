const CursoCtrl= {} 
const Curso = require('../models/CursoModels')

CursoCtrl.crear = async(req, res)=>{
    // Create new Curso

    const {nombrecurso, escuela, escuelaCiudad  }= req.body
    
    const curso =  new Curso({
        nombrecurso, 
        escuela, 
        escuelaCiudad, 
    })

    // guardar Curso

    await curso.save();
    res.json(curso
        ) /*
    res.json({ 
       mensaje: " Curso
        Creada Correctamente"
} ) */
}
CursoCtrl.listar = async(req,res)=>{

    const respuesta = await Curso.find()
    res.json(respuesta)


}

module.exports = CursoCtrl