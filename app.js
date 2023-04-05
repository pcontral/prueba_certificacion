import express from "express";
import { create } from "express-handlebars";
import fileUpload from "express-fileupload";
import viewRoutes from "./src/routes/view.routes.js";
import viewUsuarioRoutes from "./src/routes/usuario.routes.js";
import viewPublicar from "./src/routes/publicar.routes.js";
import viewComentarios from "./src/routes/comentarios.routes.js";

import * as path from "path";
import { fileURLToPath } from "url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let limiteMb = 4;
app.use(
  fileUpload({
    limits: { fileSize: limiteMb * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: `Usted ha superado el límite permitido (${limiteMb})`,
  })
);

//HANDLEBARS
const hbs = create({
  partialsDir: ["views/partials/"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(dirname, "./views"));

//Conexion
app.listen(3000, () => console.log("http://localhost:3000/"));

//middleware
app.use(viewRoutes);
app.use(viewUsuarioRoutes);
app.use('/api', viewPublicar);
app.use('/api', viewComentarios);
app.use('/imagen', express.static(dirname + '/public/images'));
