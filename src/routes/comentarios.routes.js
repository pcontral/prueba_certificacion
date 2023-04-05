import express from 'express';
import { postComentario } from '../controllers/comentarios.controller.js'
import { verificarToken } from "../middlewares/jwt.js";


const router = express.Router();

router.post("/comentarios",verificarToken, postComentario,(req, res) => {});

export default router;