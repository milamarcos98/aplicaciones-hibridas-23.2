import mongoose from "mongoose";
const Schema = mongoose.Schema;

// relaciones por referencia - normalizacion -consistencia

// user - id: 123

// curso:{
//     profe: id 123
// }


// relaciones por documento embebido - desnormalizacion - performance

// curso: {
//     profe: {
//         nombre: cskac
//         apellido: dsgsfgb
//     }
// }

// const profeSchema = new mongoose.Schema({
//     nombre: String,
//     apellido: String
// })

const cursoSchema = new mongoose.Schema({
    titulo: {
        type:String,
        required: true
    },
    descripcion: {
        type:String,
        required:false
    },    
    estado: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: false        
    },
    // profe: [profeSchema]
    profe: {
        type: Schema.Types.ObjectId, ref: 'Usuarios'
    }
});

export default mongoose.model('Curso', cursoSchema);