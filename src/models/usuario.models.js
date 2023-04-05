import db from '../db/db.js'

export const registrarUsuario = async (usuario) => {
    try {
      let consulta = await db.query(
        "INSERT INTO usuarios(id, nombre, email, password) VALUES($1, $2, $3, $4)",
        [usuario.id, usuario.nombre, usuario.email, usuario.password]
      );
      console.log(consulta.rows);
      return consulta.rows;
    } catch (error) {
      return console.log(error);
    }
  };

  
  export const loginUsuario = async (email, password) => {
    try {
      console.log(email, password);
      let consulta = await db.query("SELECT  id,nombre,email from usuarios WHERE email=$1 AND password=$2",[email, password]);
      console.log(consulta.rows[0], "es el usuario");
      return consulta.rows[0];
    } catch (error) {
      return console.log(error);
    }
  };

