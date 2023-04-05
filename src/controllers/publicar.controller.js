import { publicaciones } from '../models/publicar.models.js'
import { v4 as uuid } from 'uuid'

export const postPublicacion = async (req, res) => {

  try {
    let { titulo, contenido, categoria } = req.body;
    
    let imagen = req.imagen;
    let usuario = req.usuario;

    if (!titulo || !contenido || !categoria || !usuario || !imagen) return res.status(400).json({ message: "Faltan datos" });
    

    let today= new Date()
    let nuevaPublicacion = {
      id: uuid().slice(0, 5),
      titulo, 
      contenido,
      fecha:today.toLocaleString(),
      id_categoria: categoria, 
      id_usuario: usuario, 
      imagen
    };
    console.log();
    const result = await publicaciones(nuevaPublicacion);

    if (result == undefined) return res.status(400).json({ message: "Error al realizar la consulta" });
    
    res.status(200).json({ code:200, message: "Publicado correctamente." });

  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "Ha fallado el intento de publicacion." });
  }
};

