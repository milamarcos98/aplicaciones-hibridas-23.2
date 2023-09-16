import express  from "express"
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.send({data: "personajes"})
 })
.post((req, res) => {
    res.send({data: "personaje creado"})
 })
.put((req, res) => {
    res.send({data: "personaje actualizado"})
 })
.delete((req, res) => {
    res.send({data: "personaje eliminado"})
 })

 export default router;

