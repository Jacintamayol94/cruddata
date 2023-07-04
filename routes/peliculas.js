const express = require("express");
const peliculasController = require("../controllers/peliculasController")
const router = express.Router();

//Crear

router.get("/crear", peliculasController.crear);

router.post("/crear", peliculasController.guardado);

//Leer

router.get("/", peliculasController.listado);

//Detalle

router.get("/:id", peliculasController.detalle);

//Actualizar

router.get("/editar/:id", peliculasController.editar);
router.put("/editar/:id", peliculasController.actualizar);
/*router.patch("/editar/:id", peliculasController.actualizar);*/

//Borrar

router.delete("/borrar/:id", peliculasController.borrar);

/*router.delete("/borrar/:id", peliculasController.borrar);*/

module.exports = router;