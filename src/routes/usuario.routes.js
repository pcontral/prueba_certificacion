import express from 'express';
import { postUsuario } from '../controllers/usuario.controller.js'
import { generarToken } from '../middlewares/jwt.js'
const router = express.Router();

router.post("/usuario", postUsuario, (req, res)=>{

})

router.post("/login", generarToken, async (req, res) => {
    res.status(200).json({ code: 200, data: req.token });
  });

export default router;