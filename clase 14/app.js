import express from "express";
import mongoose from "mongoose";
import cursos from "./routes/cursos.js"
import usuarios from "./routes/usuarios.js";
import auth from "./routes/auth.js";
import "dotenv/config";

// 127.0.0.1
mongoose
  .connect("mongodb://localhost:27017/clase12", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado con la DB");
  })
  .catch(() => {
    console.log("Error al conectar con la DB");
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hola");
});
app.use("/login", auth);
app.use("/usuarios", usuarios);
app.use('/cursos', cursos)

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("server running...");
});
