import express from 'express';
import { postPublicacion } from '../controllers/publicar.controller.js'
import { verificarToken } from "../middlewares/jwt.js";
import { upload } from '../middlewares/upload.js';

const router = express.Router();

router.post("/publicar",verificarToken,upload,postPublicacion,(req, res) => {});

export default router;


