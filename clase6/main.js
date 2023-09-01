// /api/user/:id get
// /api/user post
// /api/user/:id put
import express from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const users = [
    {nombre: "Juan", apellido: "Perez"},
    {nombre: "Camila", apellido: "Marcos"}
];

app.get("/api/users", (req, res)=>{
    res.send({users})
})

app.get("/api/:nombre", (req, res) => {
//retornar el user con el nombre que obtengo por param
let usuario = req.params.nombre;
let filterUser = users.filter(u => u.nombre === usuario);
if(filterUser.length <= 0){
    return res.status(404).send({error: "usuario no encontrado"})
}
res.send({filterUser})
})

app.post('api/user', (req, res) => {
    let user = req.body;
    if(!user.nombre || !user.apellido){
        // bad request
        return res.status(400).send({status: "error", error: "form incomplete"})
    }
    console.log(users)
    users.push(user)
    res.status(201).send({status: "success", message: "user created", result: users})
})




const server = app.listen(3000, ()=> console.log("Listening on port 3000 \nopen in http://localhost:3000"))
