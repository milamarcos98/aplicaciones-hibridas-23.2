import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
    }
});

export default mongoose.model('Curso', cursoSchema);