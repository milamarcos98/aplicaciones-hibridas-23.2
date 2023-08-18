// console.log("inicio");

// setTimeout(() => {
//     console.log("uno");
// }, 0);

// console.log("dos");

// setTimeout(() => {
//     console.log("tres");
// }, 2000);

// setTimeout(() => {
//     console.log("cuatro");
// }, .5);

// console.log("fin");






// console.log("inicio");

// function esperar(segundos){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(`Espera ${segundos} segundos`)
//         }, segundos * 1000);
//     })
// }

// esperar(3)
// .then((mensaje)=>{
//     console.log(mensaje);
//     console.log("fin de la promesa")
// })

// console.log("fin")




// MODULOS

// common js 

// const operaciones = require("./operaciones");
// console.log(operaciones.suma)


// ecma script modules

// import {suma, resta} from "./operaciones.js"
import chalk from "chalk"
import resta from "./operaciones.js"

// console.log(resta(2,3))

// https://www.npmjs.com/package/chalk
console.log(chalk.bgGreen("Hello World!"))