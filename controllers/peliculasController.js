let db = require("../database/models")


let peliculasController = {
    crear: async (req, res) => {
        try {

            const generos = await db.Genero.findAll({
                raw: true
            })

            return res.render("creacionPeliculas", { generos: generos })

        } catch (error) {
            console.log(error)
        }

    },
    guardado: async (req, res) => {

        const nuevaPelicula = {
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.release_date,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        };
        try {
            await db.Pelicula.create(nuevaPelicula)
            res.redirect("/peliculas");
        } catch (error) {
            console.log(error)
        }
    },
    listado: async (req, res) => {
        try {
            const peliculas = await db.Pelicula.findAll({
                raw: true
            })

            res.render("listadoPeliculas", { peliculas: peliculas })

        } catch (error) {
            res.render("listadoPeliculas", { peliculas: [] })
            console.log(error);
        }
    },
    detalle: function (req, res) {
        db.Pelicula.findByPk(req.params.id, {
            include: [{ association: "genero" }, { association: "actores" }]
        })
            .then(function (pelicula) {
                res.render("detallePelicula", { pelicula: pelicula })
            })
    },
    editar: function (req, res) {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function ([pelicula, generos]) {
                res.render("editarPelicula", { pelicula: pelicula, generos: generos })
            })
    },
    actualizar: function (req, res) {
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.release_date,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/peliculas/" + req.params.id)
    },
    borrar: function (req, res) {
        /*Primero borrar actores*/
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/peliculas")
    }
}

module.exports = peliculasController;