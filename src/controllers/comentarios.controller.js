import { comentarios } from '../models/comentarios.models.js'
import { v4 as uuid } from 'uuid'

export const postComentario = async (req, res) => {

  try {
    let { contenido } = req.body;
    
    let idUsuario = req.usuario;

    if (!contenido) throw new Error("Faltan datos");
    
    let today = new Date()
    
    let nuevoComentario = {
      id: uuid().slice(0, 5),
      contenido,
      id_usuario: idUsuario,
      id_publicacion: 1, //esto debe cambiar
      fecha: today.toLocaleString(),
    };
    
    const result = await comentarios(nuevoComentario);
    
    if (result == undefined) return res.status(400).json({ message: "Error al realizar la consulta" });
    
    res.status(200).json({ code:200, message: "Publicado correctamente." });

  } catch (error) {
    console.log('Error en comentario:',error)
    res
      .status(500)
      .json({ code: 500, message: "Ha fallado el intento de comentario." });
  }
};