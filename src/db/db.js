import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
    host: "localhost",
    database: "practica_certificacion",
    user: "postgres",
    password: "123456",
    port: 5432,
    max: 5,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 1000,
  });
  pool.connect();
  
    pool.connect((error) => {
    if (error) {
      console.log(error.message);
      console.error("Ha ocurrido un problema al conectarse a la base de datos.");
    } else {
      console.log("Se ha conectado a la base de datos ");
    }
  });
  
  export default pool;