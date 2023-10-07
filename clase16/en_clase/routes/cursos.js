import express  from "express";
import Curso from "../models/cursos_model.js";
import verificarToken from "../middlewares/auth.js";

const ruta = express.Router();

ruta.get('/', verificarToken,(req, res) => {
    let resultado = listarCursosActivos();
    resultado.then(cursos => {
        res.json(cursos);
    }).catch(err => {
        res.status(400).json(err);
    })
});

ruta.post('/', verificarToken, (req, res) => {
    console.log(req)
    let resultado = crearCurso(req);

    resultado.then(curso => {
        res.json({
            curso
        })
    }).catch(err => {
        res.status(400).json({
            err: err.message
        })
    })
});

async function listarCursosActivos(){
    let cursos = await Curso.find({"estado": true})
    // .populate('profe')
    .populate('profe', 'nombre -_id')
    return cursos;
}

async function crearCurso(req){
    let curso = new Curso({
        titulo       : req.body.titulo,
        descripcion  : req.body.desc,
        // profe        : req.usuario
        profe: req.usuario._id
    });
    return await curso.save();
}

export default ruta;