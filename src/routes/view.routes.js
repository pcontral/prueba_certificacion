import express from 'express';
import { homeController,publicarController, comentarController } from '../controllers/views.controller.js'


const router = express.Router();


router.get(["/", "/home"], homeController, (req, res)=>{
    
});

router.get("/login", (req, res)=>{
    res.render("login");
});

router.get("/registrarse", (req, res)=>{
    res.render("registrarse");
});

router.get("/publicar", publicarController, (req, res)=>{});

router.get("/comentarios", comentarController, (req, res)=>{
    res.render("comentarios", {comentarios:obtenerComentarios()})
});
export default router;