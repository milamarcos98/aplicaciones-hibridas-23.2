import express  from "express";
import Usuario from "../models/usuarios_model.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
    let resultado = listarUsuarios();
    resultado.then(users => {
        res.json({
            users
        })
    }).catch(err => {
        res.status(400).json({err})
    })
})

ruta.post("/", (req, res) => {
    let body = req.body;
    let resultado = crearUsuario(body);
    resultado.then(user => {
        res.json({
            valor: user
        })
    }).catch(err => {
        res.status(400).json({err})
    })

})

async function crearUsuario(body){
    let usuario = new Usuario({
        email: body.email,
        nombre: body.nombre,
        password: body.password
    })
    return await usuario.save();
}

async function listarUsuarios(){
    let usuarios = await Usuario.find({estado: true});
    return usuarios;
}

export default ruta;