const {Router} = require( 'express') 
const router = Router() 
const CursoCtrl = require('../controllers/CursoControllers')



router.post('/crear',CursoCtrl.crear),
router.get('/listarCursos',CursoCtrl.listar),


module.exports= router