import db from '../db/db.js';

export const homeController = async(req, res)=>{
    let publicaciones = await db.query("SELECT * FROM publicaciones")
    res.render("home", {
        publicaciones:publicaciones.rows
    });
}

export const publicarController = async(req, res)=>{
    let categorias = await db.query("SELECT * FROM categorias ORDER BY nombre")    
    res.render("publicar", {
        categorias: categorias.rows
    })
}

export const comentarController = async(req, res)=>{
    let comentarios = await db.query("SELECT * FROM comentarios ORDER BY fecha")    
    res.render("comentarios", {
        comentarios: comentarios.rows
    })
}