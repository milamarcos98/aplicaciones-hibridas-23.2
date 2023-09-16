// import express from "express";
// import path from 'path'

// const app = express()
// const __dirname = path.resolve()
 
// import personajesRoutes from './routes/personajesRoutes.js'
// import locacionesRoutes from './routes/locacionesRoutes.js'

// app.use('/personajes', personajesRoutes)
// app.use('/locaciones', locacionesRoutes)

console.log("hello")
console.debug("hello")
console.info("hello")
console.warning("hello")
console.error("hello")
// console.error(new Error("mi error"))

let personas = [
    {nombre: "cami", edad: 24, programadora: true},
    {nombre: "cami", edad: 24, programadora: true},
    {nombre: "cami", edad: 24, programadora: true},
    {nombre: "cami", edad: 24, programadora: true}
]
console.log(personas)
console.table(personas)

console.log("hello")
console.group("mensajitos")
console.debug("hello")
console.info("hello")
console.error("hello")
console.groupEnd()

// app.use(express.static('public'))
// app.use(express.static('assets'))

// contenido estatico

// app.get("/about", function(req, res){
//     res.sendFile('./index.html', {root: __dirname})
// })

// let contador = 0;

// app.get("/contador", function(req, res) {
//     contador ++;
//     res.send("contador: " + contador)
// })

// app.listen(3000, function(){
//     console.log("server running...")
// })