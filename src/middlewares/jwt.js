import jwt from "jsonwebtoken";

import { loginUsuario } from "../models/usuario.models.js";

const SECRETO = "estoesunsecreto";

export const generarToken = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let usuario = await loginUsuario(email, password);    

    if (!usuario) {
      return res
        .status(401)
        .json({ code: 401, message: "Debe proporcionar un usuario válido." });
    }

    const token = jwt.sign({ usuario }, SECRETO);
    req.token = token;
    console.log(token);
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ code: 500, message: "ha fallado la autenticación." });
  }
};

export const verificarToken = (req, res, next) => {
  let token;
  let tokenQuery = req.query.token;
  if (tokenQuery) token = tokenQuery;
  let tokenHeader = req.headers["authorization"];

  if (tokenHeader) {
    tokenHeader = tokenHeader.split(" ");
    tokenHeader = tokenHeader[1];
    token = tokenHeader;
  }

  if (token) {
    jwt.verify(token, SECRETO, (err, data) => {
      
      if (err)
        return res
          .status(401)
          .json({
            code: 401,
            message: "Debe iniciar sesión con un usuario valido.",
          });

      req.usuario = data.usuario.id;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ code: 401, message: "Debe proporcionar un token." });
  }
};