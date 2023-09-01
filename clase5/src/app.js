import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}))

// app.get("/saludo", (req, res) =>{
//     res.send("<h1>hola desde express! yay</h1>");
// })

// app.get("/about", (req, res) =>{
//     res.send("<h1>this is about</h1>");
// })

// app.get("/contact", (req, res) =>{
//     res.send("<h1>this is contact</h1>");
// })


// app.get("/params/:nombre", (req, res) =>{
//     console.log(req.params.nombre)
//     res.send(`Bienvenido ${req.params.nombre}`)
// })
// app.get("/pepito/:nombre/:apellido", (req, res) =>{
//     console.log(req.params.nombre)
//     let str = req.params.nombre;
//     res.send(`Bienvenido ${str.charAt(0).toUpperCase() + str.slice(1)} ${req.params.apellido}`)
//     // res.send(`Bienvenido ${str[0].toUpperCase() + str.slice(1)} ${req.params.apellido}`)
// })


// /consultas?nombre=camila&apellido=marcos
// app.get("/consultas", (req, res) =>{
//     let consultas = req.query;
//     let {nombre, apellido, edad} = req.query;
//     res.send(consultas);
// })

// app.use((req, res) => {
//     res.status(404).send("<h1>404 not found!</h1>")
// })

const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", carrera: "DW"},
    {id: 2, nombre: "Pepe", apellido: "Perez", carrera: "DM"},
    {id: 3, nombre: "Maria", apellido: "Perez", carrera: "DW"},
    {id: 4, nombre: "Carlos", apellido: "Perez", carrera: "DM"},
    {id: 5, nombre: "Lucia", apellido: "Perez", carrera: "DW"},
];

app.get("/", (req, res) => {
    let carrera = req.query.carrera;
    if(!carrera || (carrera !== "DM" && carrera !== "DW")) return res.send({usuarios})
    let usuariosFiltrados = usuarios.filter(u => u.carrera === carrera)
    res.send({usuarios: usuariosFiltrados})
})



app.listen(3000, () => console.log("server running on port 3000... \nopen in http://localhost:3000"));