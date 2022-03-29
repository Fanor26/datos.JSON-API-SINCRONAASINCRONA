const EscuelaCtrl= {} 
const Escuela = require('../models/EscuelaModels')

EscuelaCtrl.crear = async(req, res)=>{
    // Create new escuela
    const {nombre, director, gestion}= req.body
    
    const escuela =  new Escuela({
        nombre, 
        director, 
        gestion, 
    })

    // guardar escuela
    await escuela.save();
    res.json(escuela) /*
    res.json({ 
       mensaje: " Escuela Creada Correctamente"
} ) */
}

module.exports = EscuelaCtrl