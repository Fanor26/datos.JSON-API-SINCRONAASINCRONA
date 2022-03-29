const EscuelaCtrl= {} 
const Escuela = require('../models/EscuelaModels')

EscuelaCtrl.crear = async(req, res)=>{
    // Create new escuela
    const {nombre, director, gestion, curso}= req.body
    
    const escuela =  new Escuela({
        nombre, 
        director, 
        gestion,
        curso 
    })

    // guardar escuela
    await escuela.save();
    res.json(escuela) /*
    res.json({ 
       mensaje: " Escuela Creada Correctamente"
} ) */
}
EscuelaCtrl.listar = async(req,res)=>{

    const respuesta = await Escuela.find()
    res.json(respuesta)


}
EscuelaCtrl.escuelaDeunCurso = async(req,res)=>{
    const id= req.params.id

    const respuesta = await Escuela.find({curso:id})
    res.json(respuesta)
   

}

module.exports = EscuelaCtrl