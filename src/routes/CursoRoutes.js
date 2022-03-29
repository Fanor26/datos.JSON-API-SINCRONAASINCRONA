const {Router} = require( 'express') 
const router = Router() 
const CursoCtrl = require('../controllers/CursoControllers')

const upload = require("../utils/multer");

router.post('/crear', upload.single("image"),CursoCtrl.crear),

router.get('/listarCursos',CursoCtrl.listar),
router.delete('/eliminar/:id',CursoCtrl.eliminar),
router.put('/actualizar/:id',CursoCtrl.actualizar),

module.exports= router