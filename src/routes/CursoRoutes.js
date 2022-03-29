const {Router} = require( 'express') 
const router = Router() 
const CursoCtrl = require('../controllers/CursoControllers')



router.post('/crear',CursoCtrl.crear),


module.exports= router