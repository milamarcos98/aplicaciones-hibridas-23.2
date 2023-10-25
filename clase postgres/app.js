import express from "express";
import db from "./config/db.js";
import Post from "./models/Post.js";
import User from "./models/Users.js";
import { DataTypes, Op, Sequelize} from "sequelize";

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 1 a 1
// usuarios - info_contacto 
// usuarios.hasOne(info_contacto)
// info_contacto.belongsTo(usuarios)

// 1 a muchos
User.hasMany(Post, {
    // restrinc, cascade, no action, set default, set null
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    // foreignKey: "custom_name"
    // foreignKey: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
})
Post.belongsTo(User);

// muchos a muchos
// Actores.belongsToMany(Peliculas, {through: "actores_peliculas"})
// Peliculas.belongsToMany(Actores, {through: "actores_peliculas"})

db.authenticate()
.then(()=> console.log("db connected..."))
.catch((err)=> console.log("error: " + err))

app.get("/", (req, res) => {
    res.send("connected")
})

// crear user
app.post("/users", (req, res) => {
    const { nombre, email, apellido, password } = req.body;

    User.create({ nombre, email, apellido, password })
    .then(nuevoUsuario => {
        res.json(nuevoUsuario)
    })
    .catch((err) => {
        res.status(400).send("error: " + err.message)
    })
})

// traer todos los users
app.get("/users", (req, res) => {
    User.findAll({ include: [Post], attributes: {exclude: ['password']}})
    // User.findAll()
    .then(users => {
        // res.json({"getter": users.apellido, "raw" : users.getDataValue('apellido')})
        res.json(users)
    })
    .catch((err) => {
        res.status(400).send("error: " + err.message)
    })
})

// crear post
app.post('/users/:userId/posts', (req, res) => {
    const {titulo, contenido } = req.body;
    const userId = req.params.userId;

    // findOne
    User.findByPk(userId)
    .then(user => {
        if(!user){
            return res.status(404).json({msg: "user no existe"})
        }
        return Post.create({titulo, contenido})
        .then(nuevoPost => {
            return user.addPost(nuevoPost).then(() => res.json("creado!"))
        })
        .catch((err) => {
            res.status(400).send("error: " + err.message)
        })
    })
    .catch((err) => {
        res.status(400).send("error: " + err.message)
    })
})

// traer todos los post
app.get("/posts", (req, res) => {
    Post.findAll()
    .then(posts => {
        res.json(posts)
    })
    .catch((err) => {
        res.status(400).send("error: " + err.message)
    })
})

app.get('/posts/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    // Post.findOne({where : {titulo: nombre}})
    Post.findOne({where : {titulo: {[Op.iLike] : `%${nombre}%`}}})
})

app.delete('/users/:userId', (req,res) => {
    const userId = req.params.userId;

    User.findByPk(userId)
    .then(user => {
        if(!user){
            return res.status(404).json({msg: "user no existe"})
        }
        return user.destroy()
        .then(() => res.json({msg: 'Usuario eliminado'}))
    })
})

// put
// update

app.patch('/posts/:postId', (req, res) => {
    const {titulo, contenido} = req.body;
    const postId = req.params.postId;

    Post.findByPk(postId)
    .then(post => {
        if(!post){
            return res.status(404).json({msg: "post no existe"})
        }
        if(titulo){
            post.titulo = titulo;
        }
        if(contenido){
            post.contenido = contenido;
        }

        return post.save()
        // then 
        // catch
        
    })
    .catch((err) => {
        res.status(400).send("error: " + err.message)
    })
})


app.listen(PORT, () => console.log("server running..."))