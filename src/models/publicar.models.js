import db from '../db/db.js'

export const publicaciones = async (publicacion) => {
    try {
      let consulta = await db.query(
        "INSERT INTO publicaciones(id, titulo, contenido, fecha, id_categoria, id_usuario, imagen) VALUES($1, $2, $3, $4, $5, $6, $7)",
        [publicacion.id, publicacion.titulo, publicacion.contenido, publicacion.fecha, publicacion.id_categoria, publicacion.id_usuario, publicacion.imagen]
      );
      console.log(consulta.rows);
      return consulta.rows;
    } catch (error) {
      return console.log(error);
    }
  };