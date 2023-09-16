import express  from "express"
const router = express.Router();

router.get("/", (req, res) => {
    res.send({data: "locaciones"})
 })
 router.post("/", (req, res) => {
    res.send({data: "locacion creado"})
 })
 router.put("/", (req, res) => {
    res.send({data: "locacion actualizado"})
 })
 router.delete("/", (req, res) => {
    res.send({data: "locacion eliminado"})
 })

 export default router;
