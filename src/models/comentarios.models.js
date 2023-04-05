import db from '../db/db.js'

export const comentarios = async (comentario) => {
    try {
      let consulta = await db.query(
        "INSERT INTO comentarios(id, contenido, id_usuario, id_publicacion, fecha) VALUES($1, $2, $3, $4, $5)",
        [comentario.id, comentario.contenido, comentario.id_usuario, comentario.id_publicacion, comentario.fecha]
      );
      console.log(consulta.rows);
      return consulta.rows;
    } catch (error) {
      return console.log(error);
    }
  };