const {Router} = require( 'express') 
const router = Router() 
const EscuelaCtrl = require('../controllers/EscuelaControllers')



router.post('/crear',EscuelaCtrl.crear),
router.get('/listarEscuelas',EscuelaCtrl.listar),
router.get('/listarEscuelasCurso/:id',EscuelaCtrl.escuelaDeunCurso),
module.exports= router