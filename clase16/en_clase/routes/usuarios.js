import express  from "express";
import Usuario from "../models/usuarios_model.js";
import bcrypt from "bcrypt"
import verificarToken from "../middlewares/auth.js";
import Joi from "joi";
// zod
// https://zod.dev/
const ruta = express.Router();
// https://joi.dev/api/?v=17.9.1
const schema = Joi.object({
    nombre: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')),
        email: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
})

ruta.get("/", verificarToken, (req, res) => {
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

    const {error, value} = schema.validate({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
    })

    if(!error){
            let resultado = crearUsuario(body);
        resultado.then(user => {
            res.json({
                valor: user
            })
        }).catch(err => {
            res.status(400).json({err})
        })
    }else{
        res.status(400).json({
            error
        })
    }

   

})

ruta.put("/:email", (req, res)=> {
    let resultado = actualizarUsuario(req.body, req.params.email);
    resultado.then(valor => {
        res.json({
            valor
        })
    }).catch(err => {
            res.status(400).json({err})
        })
})

async function actualizarUsuario(body, email){
    let usuario = await Usuario.updateOne({"email": email}, {
        $set:{
            nombre: body.nombre,
            password: body.password
        }
    })
    return usuario;
}

async function crearUsuario(body){
    let usuario = new Usuario({
        email: body.email,
        nombre: body.nombre,
        password: bcrypt.hashSync(body.password, 10)
    })
    return await usuario.save();
}

async function listarUsuarios(){
    let usuarios = await Usuario.find({estado: true});
    return usuarios;
}

export default ruta;