const {Router} = require( 'express') 
const router = Router() 
const CursoCtrl = require('../controllers/CursoControllers')
const Curso = require('../models/CursoModels')
const upload = require("../utils/multer");

router.post('/crear', upload.single("image"),CursoCtrl.crear),

router.get('/listarCursos',CursoCtrl.listar),

router.get("/:id", async (req, res) => {
    try {
      // Buscar usuario por id
      let curso = await Curso.findById(req.params.id);
      res.json(curso);
    } catch (err) {
      console.log(err);
    }
  });

router.delete('/eliminar/:id',CursoCtrl.eliminar),
router.put('/actualizar/:id', upload.single("image"),CursoCtrl.actualizar),

module.exports= router