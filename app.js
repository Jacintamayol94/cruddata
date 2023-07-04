const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const cookies = require("cookie-parser");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

//Routers
const peliculasRouter = require('./routes/peliculas');
const mainRouter = require("./routes/mainRoutes");


//Views

app.set("view engine", "ejs");

app.set("views", [
    path.join(__dirname, "./views"),
    /*path.join(__dirname, "./views/main"),
    path.join(__dirname, "./views/peliculas"),
    path.join(__dirname, "./views/user"),*/
  ]);

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookies());
app.use(express.json());


//Routes

app.use('/peliculas', peliculasRouter);
app.use('/', mainRouter);

app.listen(3000, () =>
  console.log("Servidor escuchando en el puerto http://localhost:3000/")
);