import { registrarUsuario } from '../models/usuario.models.js'
import { v4 as uuid } from 'uuid'

export const postUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    console.log('nombre: ', nombre);
    console.log("email: ", email);
    console.log("password: ", password);
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let nuevoUsuario = {
      id: uuid().slice(0, 5),
      nombre,
      email,
      password,
    };
    // console.log(nuevoCliente);
    const result = await registrarUsuario(nuevoUsuario);
    res.status(200).json({ data: result, message: "Agregado correctamente." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, message: "Ha fallado el intento de registro." });
  }
};