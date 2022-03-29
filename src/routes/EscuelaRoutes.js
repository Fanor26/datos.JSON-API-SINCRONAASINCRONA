const {Router} = require( 'express') 
const router = Router() 
const EscuelaCtrl = require('../controllers/EscuelaControllers')



router.post('/crear',EscuelaCtrl.crear),


module.exports= router